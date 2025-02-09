import React from "react"
import { Button } from "../src/ui/primitives/Button/Button"
import figma from "@figma/code-connect"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  Button,
  "https://www.figma.com/design/B8J4T0cWLVasuhjn9ljAjh/SDS-Code-Connect-Tutorial-(MAKE-A-COPY)?node-id=9762%3A426",
  {
    props: {
      iconStart: figma.boolean("Has Icon Start", {
        true: figma.instance("Icon Start"),
      }),
      iconEnd: figma.boolean("Has Icon End", {
        true: figma.instance("Icon End"),
      }),
      label: figma.string("Label"),
      variant: figma.enum("Variant", {
        Primary: "primary",
        Neutral: "neutral",
        Subtle: "subtle",
      }),
      isDisabled: figma.enum("State", {
        Disabled: true,
      }),
      size: figma.enum("Size", {
        Small: "small",
      }),
    },
    example: (props) => <Button variant={props.variant} size={props.size} isDisabled={props.isDisabled} >
      {props.iconStart}
      {props.label}
      {props.iconEnd}
    </Button>,
  },
)
