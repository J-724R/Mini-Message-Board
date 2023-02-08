import React, { useEffect, useState } from "react";
import { TDogs } from "../types/dogTypes";

export default function DogCard (dog: TDogs) {


  return(
    <div className="dogCard">
      <div>
        <div className="dogCard_Header">
          <div>Name: {dog.name}</div>
          <div>breed {dog.breed} | Age {dog.age}</div>
        </div>
        <div className="dogcard_ImgDiv"></div>
      </div>
      <div className="dogCard_Body">
          {dog.bio}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur molestias consequuntur maxime dolorem repellendus. Magnam aut eum ab eius eveniet recusandae? Maxime labore laborum voluptatum culpa repellat dolor non quam?
      </div>
    </div>
  )
}