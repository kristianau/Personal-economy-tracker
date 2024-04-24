import { useState, useEffect } from "react";
const imageUrl = "https://api.nasa.gov/planetary/apod?api_key=KN9E0gtUgPoDtOHaWFEIQVNiK3rjcTNHcB28FDff";

export default function SelectToAddPage() {
    const [img, setImg] = useState([]);

    const fetchImg = async () => {
        const res = await fetch(imageUrl);
        const imageJson = await res.json();
        
        setImg(imageJson);
    };

    useEffect(() => {
        fetchImg();
    }, []);

    return (
        <div className="flex flex-row">
            <div className="flex flex-col w-3/5">
                <h1 className="font-semibold tracking-wide underline mb-3">{img.title}</h1>
                <img key={img.id} src={img.url} alt={img.title}  />
            </div>
            <div className="w-2/5 mt-7 mx-2">
                <p>{img.explanation}</p>
            </div>
        </ div>
    );

};