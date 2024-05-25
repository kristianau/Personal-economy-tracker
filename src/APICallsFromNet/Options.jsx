import { useState, useEffect } from "react";

//THIS FILE IS NOT USED

//const imageUrl = "https://yesno.wtf/api";
//const imageUrl = "https://api.adviceslip.com/advice";
const imageUrl = "https://dog.ceo/api/breeds/image/random";
//const imageUrl = "https://api.chucknorris.io/jokes/random";
//const imageUrl = "https://api.nasa.gov/planetary/apod?api_key=KN9E0gtUgPoDtOHaWFEIQVNiK3rjcTNHcB28FDff";

export default function SelectToAddPage() {
    const [img, setImg] = useState([]);


    //The fetch() method requires a mandatory argument, which is the path or URL to the resource
    //you want to fetch.Then it returns a Promise so you can handle success or failure using the
    //then() and catch () methods.

    const fetchImg = async () => {
        const response = await fetch(imageUrl);
        const imageJson = await response.json();
        console.log(imageJson)

        setImg(imageJson);
    };

    // In React, we perform API requests within the useEffect() hook. 
    useEffect(() => {
        fetchImg();
    }, []);

    return (
        <div className="flex flex-row">
            <div className="flex flex-col w-3/5">
                <h1 className="font-semibold tracking-wide underline mb-3">{img.title}</h1>
                <img key={img.id} src={img.message} alt={img.title} />
            </div>
            <div className="w-2/5 mt-7 mx-2">
                <p>{img.quote}</p>
            </div>
        </ div>
    );

};