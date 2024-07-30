import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faShare, faUser } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";

const InspectingWindow = ({ photo }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = photo.source;
    link.download = photo.title || "download";
    link.click();
    link.parentNode.removeChild(link);
  };
  const handleShare = () => {
    if (navigator.share) {
      // Use the Web Share API if available
      navigator
        .share({
          title: photo.title,
          text: "Check out this photo!",
          url: photo.source,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      // Fallback for browsers that do not support the Web Share API
      const shareUrl = `https://twitter.com/intent/tweet?text=Check%20out%20this%20photo!&url=${encodeURIComponent(
        photo.source
      )}`;
      window.open(shareUrl, "_blank");
    }
  };
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 rounded-3xl w-full max-w-[1080px] min-h-[400px] shadow-xl m-auto bg-secondary-1 `}
    >
      <div className="flex items-center size-full sm:rounded-l-3xl sm:rounded-tr-none rounded-t-3xl overflow-hidden bg-secondary-2">
        <img src={photo.source} alt="displaying photo" className="w-full " />
      </div>

      <div className="size-full p-4 flex flex-col gap-0">
        <div className="size-fit grow">
          <div className="flex-row-reverse p-2 h-fit flex sticky top-[110px] z-1 gap-2 bg-secondary-1">
            <button
              data-tooltip-id="Download"
              data-tooltip-content={"Download"}
              data-tooltip-place="bottom"
              className="hover:bg-secondary-2 rounded-full size-11 "
              onClick={handleDownload}
            >
              <FontAwesomeIcon icon={faDownload} size="xl" />
            </button>
            <Tooltip id="Download" className="tooltip" classNameArrow="hidden" />
            <button
              data-tooltip-id="Share"
              data-tooltip-content={"Share"}
              data-tooltip-place="bottom"
              className="hover:bg-secondary-2 rounded-full size-11 "
              onClick={handleShare}
            >
              <FontAwesomeIcon icon={faShare} size="xl" />
            </button>
            <Tooltip id="Share" className="tooltip" classNameArrow="hidden" />
          </div>
          <div className="grow flex-col flex gap-2">
            <h1 className="text-3xl font-bold">{photo.title}</h1>
            <h2 className="text-2xl">{photo.categories.toString()}</h2>
            <p className="text-xl overflow-y-scroll no-scrollbar text-justify pr-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
              distinctio minima. Quo, numquam iusto! Consequatur sed, ratione quasi
              enim possimus aliquam repellendus, facilis quidem fugiat distinctio
              nobis. <br /> Culpa, voluptates explicabo?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ratione, voluptate harum, soluta
              similique fuga corporis natus distinctio atque quia asperiores numquam
              minima labore eius? Adipisci consequuntur vel temporibus iste
              aspernatur?
            </p>
          </div>
        </div>
        <div className="bg-secondary-1 py-2 sticky z-1 bottom-0 flex flex-row items-center justify-between  w-full h-fit gap-2">
          <button className="bg-secondary-2 rounded-full size-11">
            <FontAwesomeIcon icon={faUser} size="xl" />
          </button>
          <input
            className={`bg-transparent border-accent border-2 px-3 w-[20px] grow  h-full flex rounded-full p-0 placeholder:text-accent  focus:outline-none text-xl  placeholder:italic placeholder:select-none placeholder:text-base`}
            placeholder="Make a comment..."
            type="text"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
};

export default InspectingWindow;
