import { ComponentType } from "react";
import { ComponentInstance } from "@uniformdev/canvas";
import {
  DefaultNotImplementedComponent,
  ComponentProps,
} from "@uniformdev/canvas-react";

import Yolo from "./Yolo";
import Person from "./Person";

const mappings: ComponentMapping = {
  yolo: Yolo,
  person: Person,
};

type ComponentMapping = Record<string, ComponentType<any>>;

export function resolveRenderer(
  component: ComponentInstance
): ComponentType<ComponentProps<any>> | null {
  const componentImpl = mappings[component.type];
  return componentImpl ? componentImpl : DefaultNotImplementedComponent;
}

export default mappings;
