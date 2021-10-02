import { FunctionComponent, useEffect, useState } from "react";
import { useAppContext } from "~/context/AppContext";
import styles from "./ShortenForm.module.css";

interface ShortenLinkType {
    value: string;
    shortValue: string;
}

const ShortenForm: FunctionComponent = () => {

    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [waiting, setWaiting] = useState<boolean>(false);
    const [urlCopy, setUrlCopy] = useState<string>("");
    const [copied, setCopied] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [shortenLinks, setShortenLinks] = useState<ShortenLinkType[]>([]);

    const { validateUrl } = useAppContext();

    useEffect(() => {
        setShortenLinks(localStorage.getItem("shortenArray") ? JSON.parse(localStorage.getItem("shortenArray") || '{}') : [])
    }, []);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setValue(value);
        setError(false);
    }

    const checkMemory = (val: string) => {
        return shortenLinks.find(link => link.shortValue === val);
    }

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (value.length === 0 || value.length <= 8) {
            setError(true);
            setErrorMessage("Please add a link");
            return;
        } else if (!validateUrl(value)) {
            setError(true);
            setErrorMessage("Please add a valid link");
            return;
        }

        setError(false);
        setErrorMessage("");

        try {
            setWaiting(true);
            const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${value}`);
            const { result } = await response.json();

            if (checkMemory(result.full_short_link3)) {
                return;
            }

            const temp_Array = [...shortenLinks, ...[{ value: `https://${value}`, shortValue: result.full_short_link3 }]];
            setShortenLinks(temp_Array);
            localStorage.setItem("shortenArray", JSON.stringify(temp_Array));
            setWaiting(false);
            setValue('');
        } catch (error: any) {
            setErrorMessage(`Error: ${error?.message}`);
        }
    }

    const handleCopyUrl = (shortUrl: string) => {
        navigator.clipboard.writeText(shortUrl);
        setCopied(true);
        setUrlCopy(shortUrl);
    }

    return (
        <div className={styles.form_Wrapper}>
            <form className={styles.shorten_Form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="shortenInput"
                    className={error ? `${styles.shorten_Input} ${styles.error}` : styles.shorten_Input}
                    placeholder="Shorten a link here..."
                    onChange={handleInput}
                    value={value}
                />
                <span
                    className={error ? `${styles.error_Msg} ${styles.show}` : styles.error_Msg}>
                    {errorMessage}
                </span>
                <input
                    className={styles.shorten_Button}
                    type="submit"
                    value={waiting ? "Processing" : "Shorten It!"}
                />
            </form>

            <ul className={styles.shortenList}>
                {shortenLinks && shortenLinks.map(link => {
                    return (
                        <li key={link.shortValue}>
                            <p className={styles.url_Orig}>{link.value}</p>
                            <div className={styles.short_Part}>
                                <p className={styles.url_Short}>{link.shortValue}</p>
                                <a
                                    className={copied && urlCopy === link.shortValue ?
                                        "copy__button.round.thin.copied" : "copy__button.round.thin"}
                                    onClick={() => handleCopyUrl(link.shortValue)}
                                >
                                    {copied && urlCopy === link.shortValue ? "Copied!" : "Copy"}
                                </a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ShortenForm;