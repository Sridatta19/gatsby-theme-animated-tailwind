import React from "react";
import Image from "../components/image";

const Index = () => {
  return (
    <div className="space-y-16">
      <h1 className="mx-10 md:mx-40 xl:mx-80 text-gray-900 font-arvo font-extrabold text-6xl">
        Build Beautiful Tailwind Sites
      </h1>
      <div className="mx-10 md:mx-40 xl:mx-80">
        <span className="text-gray-900 font-arvo text-5xl leading-8">L</span>
        <span className="ml-1 text-gray-900 font-cabin text-lg leading-8">
          orem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          sint, exercitationem consequuntur enim quos, vitae laboriosam esse
          aliquid id voluptatibus molestias repudiandae nesciunt quae, nobis ab
          ipsam! Culpa, officia ut. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Rem consequuntur repellat nobis! Magnam, explicabo
          ab quidem harum cum itaque reprehenderit nemo beatae ipsa eligendi
          amet laudantium. Amet voluptatibus saepe dolore. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Repellat facere nam aliquid quia
          quasi necessitatibus in tempore, quaerat similique voluptas aliquam
          unde voluptatum nulla repellendus blanditiis et. Molestiae, quas
          deleniti?
        </span>
      </div>
      <div className="md:mx-32 xl:mx-56">
        <Image />
      </div>
      <p className="mx-10 md:mx-40 xl:mx-80 text-gray-900 font-cabin text-lg leading-8">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        sint, exercitationem consequuntur enim quos, vitae laboriosam esse
        aliquid id voluptatibus molestias repudiandae nesciunt quae, nobis ab
        ipsam! Culpa, officia ut. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Rem consequuntur repellat nobis! Magnam, explicabo ab
        quidem harum cum itaque reprehenderit nemo beatae ipsa eligendi amet
        laudantium. Amet voluptatibus saepe dolore. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Repellat facere nam aliquid quia quasi
        necessitatibus in tempore, quaerat similique voluptas aliquam unde
        voluptatum nulla repellendus blanditiis et. Molestiae, quas deleniti?
      </p>
    </div>
  );
};

export default Index;
