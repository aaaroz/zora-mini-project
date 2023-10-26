import React from "react";
import aboutImage from "../../../assets/about.svg";

export default function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-5 h-auto place-items-center p-4 md:p-14">
      <div>
        <h1 className="text-center md:text-left text-1xl font-bold uppercase px-4 pb-8 mt-5 mb-5 md:text-2xl">
          About Us
        </h1>
        <p className=" text-md text-justify px-4 pb-10">
          Zora Ecommerce is your go-to destination for all things fashion. As an
          innovative e-commerce platform, we offer a wide array of clothing
          options, ensuring that you're always in style. What sets us apart is
          our unique approach – we empower individuals from all walks of life to
          become sellers on our platform. This means you can discover a diverse
          range of products, from trendy streetwear to elegant formal attire,
          all in one place. With Zora Ecommerce, you not only shop, but you also
          have the opportunity to sell your own fashion creations, making it a
          vibrant hub for fashion enthusiasts and entrepreneurs alike. Explore
          the world of fashion with us, where everyone has a place to showcase
          their unique style and find the perfect look.
        </p>
      </div>
      <img src={aboutImage} alt="about-us" />
    </section>
  );
}
