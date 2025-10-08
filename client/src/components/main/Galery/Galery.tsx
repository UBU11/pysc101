import TiltedCard from "@/components/card/Card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Galery() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");

  useEffect(() => {
    const getUser = async () =>
      axios
        .get("http://localhost:3000/api/get?postId=11")
        .then((res) => {
          setTitle(res.data.title);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log("the server is running fine");
        });

    getUser();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-32">
      <TiltedCard
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
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
h-full w-full bg-violet-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-50 border p-1
"
          >
            {title}
          </p>
        }
      />

      <TiltedCard
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
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
h-full w-full bg-violet-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-50 border p-1
"
          >
            {title}
          </p>
        }
      />

      <TiltedCard
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
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
h-full w-full bg-violet-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-50 border p-1
"
          >
            {title}
          </p>
        }
      />

      <TiltedCard
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
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
h-full w-full bg-violet-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-50 border p-1
"
          >
            {title}
          </p>
        }
      />

      <TiltedCard
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
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
h-full w-full bg-violet-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-50 border p-1
"
          >
            {title}
          </p>
        }
      />

      <TiltedCard
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
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
h-full w-full bg-violet-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-50 border p-1
"
          >
            {title}
          </p>
        }
      />
    </div>
  );
}
