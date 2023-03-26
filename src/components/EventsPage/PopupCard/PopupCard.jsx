import React from "react";
import "./PopupCard.css";

const PopupCard = (props) => {
  return (
    <div className="absolute h-[100%] w-screen">
      <div
        className="absolute top-0 left-0 h-[100%] w-screen bg-black bg-opacity-50 z-50 border-4 border-spacing-2 rounded-md border-black"
        id="popup-card"
        onClick={() => {
          props.onPopUpCardClick();
        }}
      ></div>

      <div
        className="h-[120vh] w-[60%] left-[50%] bg-black top-[10%] absolute z-[60]"
        style={{ transform: "translateX(-50%)" }}
      >
        <img
          className="w-full h-[50%] object-fit absolute"
          src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
          alt="popup card image"
        />

        <div className="h-[10%] w-full bg-gradient-to-t from-black to-transparent absolute left-0 bottom-[46%]"></div>

        <div
          id="card_content"
          className="text-white w-full absolute top-[44%] h-[56%]"
        >
          <h3
            className="p-10 text-3xl font-bold"
            style={{ transform: "translateY(-40%)" }}
          >
            Uncommon Hacks 2023
          </h3>

          <p className="pl-6">
            <span>Date:</span> 23/03/2023
          </p>
          <p className="pl-6">
            <span>Time:</span> Sat 09am - Sun 10am
          </p>
          <p className="pl-6">
            <span>Location:</span> Uchicago
          </p>

          <p className="w-full p-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed facere
            nostrum aperiam? Aspernatur, libero cum! Sunt non qui dolorum a
            tempora iure nisi enim ratione numquam? Incidunt odio maiores culpa,
            harum exercitationem, fuga dolore fugiat nobis distinctio, nesciunt
            esse atque ipsa id aliquam doloremque iusto! Asperiores nihil,
            dolores enim quo error omnis inventore repellendus dolore natus
            officiis, repellat nulla quas dicta cum aperiam, ipsam hic officia
            unde quasi aut sit aliquid animi quos dolorum. Velit totam numquam
            deserunt, iste, perspiciatis harum error eveniet optio repudiandae
            nemo tenetur rerum enim sit tempore inventore pariatur accusamus
            alias sunt nisi. Ut, incidunt, voluptatum, veritatis esse molestias
            exercitationem tenetur molestiae dolores architecto saepe quibusdam
            dicta explicabo culpa enim. Quae eos corporis et pariatur veniam
            vitae, voluptatum architecto hic. Quod consequatur impedit quia
            inventore veritatis aliquam, sit ad, similique dolor amet tempore
            esse cumque sed exercitationem sint quae voluptatum rem dicta!
            Voluptatum, earum odit, rem nemo autem hic possimus corporis
            veritatis laboriosam culpa maxime eligendi repellat vel itaque
            deleniti quod, incidunt inventore dolorum! Deleniti eligendi
            voluptatibus aliquam similique assumenda officiis alias minima
            commodi dolorem suscipit delectus reprehenderit reiciendis libero
            ut, velit, minus tempora quibusdam ea. Sit quo facilis sint numquam
            porro modi, iure rerum tempore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
