import TiltedCard from "@/components/card/Card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Galery() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const getUser = async () =>
      axios({
        method: "get",
        url: "http://localhost:3000/api/get",
      })
        .then((res) => {
          setBlog(blog.concat(res.data));
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log("the server is running fine");
        });

    getUser();
  }, []);
  console.log(blog);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-32">
      {blog.map((card: any) => {
        console.log(card);
        return (
          <TiltedCard
            key={card.post_id}
            imageSrc={
              card.image_url ||
              "https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk="
            }
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p
                className="
h-full w-fit bg-violet-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-50 border p-1
"
              >
                {card.title}
              </p>
            }
          />
        );
      })}
    </div>
  );
}
