import { useEffect } from "react";
import CardSwap, { Card } from "./CardSwap";
import axios from "axios";
import { useState } from "react";

const [img, setImage] = useState<String>("");
useEffect(() => {
  const getData = async () =>
    axios({
      method: "get",
      url: "http://localhost:3000/api/get",
    })
      .then((res) => {
        console.log(res.data);
        return setImage(res.data[0].image_url);
      })
      .catch((err) => console.log("error is occured:", err))
      .finally(() => console.log("successfull"));

      getData()
}, []);

export default function Main() {
  return (
    <CardSwap
      cardDistance={60}
      verticalDistance={70}
      delay={5000}
      pauseOnHover={false}
    >
      <Card>
        <img src="" alt="" />
        <p>Your content here</p>
      </Card>
      <Card>
        <h3>Card 2</h3>
        <p>Your content here</p>
      </Card>
      <Card>
        <h3>Card 3</h3>
        <p>Your content here</p>
      </Card>
    </CardSwap>
  );
}
