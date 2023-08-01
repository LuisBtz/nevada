import React from "react";
import styled from "styled-components";
import OneColumn from "./OneColumn";
import TwoColumn from "./TwoColumn";
import VideoColumn from "./VideoColumn";

const modulesArr = [
    { name: "imageType", comp: OneColumn },
    { name: "twoImages", comp: TwoColumn },
    { name: "stringType", comp: VideoColumn },
  ];
  
  const ModuleComp = ({ modulos, props }) => {
    let final_arr = [];
  
    modulos.forEach((poMod) => {
      modulesArr.forEach((mMod) => {
        if (poMod["_type"] === mMod.name) {
          final_arr.push({ ...poMod, ...mMod });
        }
      });
    });

    return(
        <ModuleCont>
            {final_arr.map((Module, i) => (
                <Module.comp key={i} data={{ ...Module }} props={props} />
            ))}
        </ModuleCont>
    )
}

const ModuleCont = styled.div``

export default ModuleComp