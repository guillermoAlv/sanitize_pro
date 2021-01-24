// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ueaamJQPez7AwMHobw3iwx
// Component: GK4DHm6kt-me
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_sanitize.module.css"; // plasmic-import: ueaamJQPez7AwMHobw3iwx/projectcss
import sty from "./PlasmicFieldBox.module.css"; // plasmic-import: GK4DHm6kt-me/css

export type PlasmicFieldBox__VariantMembers = {};
export type PlasmicFieldBox__VariantsArgs = {};
type VariantPropType = keyof PlasmicFieldBox__VariantsArgs;
export const PlasmicFieldBox__VariantProps = new Array<VariantPropType>();

export type PlasmicFieldBox__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicFieldBox__ArgsType;
export const PlasmicFieldBox__ArgProps = new Array<ArgPropType>("children");

export type PlasmicFieldBox__OverridesType = {
  root?: p.Flex<"div">;
  fieldName?: p.Flex<"div">;
};

export interface DefaultFieldBoxProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicFieldBox__RenderFunc(props: {
  variants: PlasmicFieldBox__VariantsArgs;
  args: PlasmicFieldBox__ArgsType;
  overrides: PlasmicFieldBox__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.box__aTH)}>
        <div
          data-plasmic-name={"fieldName"}
          data-plasmic-override={overrides.fieldName}
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.fieldName
          )}
        >
          {"Enter some text"}
        </div>
      </div>

      <div className={classNames(defaultcss.all, sty.box__acJrb)}>
        <p.PlasmicSlot defaultContents={null} value={args.children} />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "fieldName"],
  fieldName: ["fieldName"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  fieldName: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFieldBox__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFieldBox__VariantsArgs;
    args?: PlasmicFieldBox__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFieldBox__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFieldBox__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFieldBox__ArgProps,
      internalVariantPropNames: PlasmicFieldBox__VariantProps
    });

    return PlasmicFieldBox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFieldBox";
  } else {
    func.displayName = `PlasmicFieldBox.${nodeName}`;
  }
  return func;
}

export const PlasmicFieldBox = Object.assign(
  // Top-level PlasmicFieldBox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    fieldName: makeNodeComponent("fieldName"),

    // Metadata about props expected for PlasmicFieldBox
    internalVariantProps: PlasmicFieldBox__VariantProps,
    internalArgProps: PlasmicFieldBox__ArgProps
  }
);

export default PlasmicFieldBox;
/* prettier-ignore-end */
