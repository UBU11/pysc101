import { useEffect } from "react";
import CardSwap, { Card } from "./CardSwap";
import axios from "axios";
import { useState } from "react";

const [image, setImage] = useState<String[]>([]);
useEffect(() => {
  const getData = async () =>
    axios({
      method: "get",
      url: "http://localhost:3000/api/get",
    })
      .then((res) => {
        console.log(res.data);
        return setImage(image.concat(res.data));
      })
      .catch((err) => console.log("error is occured:", err))
      .finally(() => console.log("successfull"));

  getData();
}, []);

export default function Main() {
  return (
    <CardSwap
      cardDistance={60}
      verticalDistance={70}
      delay={5000}
      pauseOnHover={false}
    >
      {image.map((image) => (
        <Card>
          <img src={image.image_url} alt="image is loading....." />
          <p>Your content here</p>
        </Card>
      ))}
    </CardSwap>
  );
}
