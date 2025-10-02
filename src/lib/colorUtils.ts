import type LkColorWithOnToken from "./types/lk-color";
import type LkColor from "./types/lk-color";
import { LkColors } from "./utils/debugUtils";

const colorsWithOnTokens = [
  "primary",
  "primarycontainer",
  "secondary",
  "secondarycontainer",
  "tertiary",
  "tertiarycontainer",
  "error",
  "errorcontainer",
  "success",
  "successcontainer",
  "warning",
  "warningcontainer",
  "info",
  "infocontainer",
  "background",
  "surface",
  "surfacevariant",
  "surfacecontainerlowest", //todo: make sure component assigns "onsurface" to text when these are present
  "surfacecontainerlow",
  "surfacecontainer",
  "surfacecontainerhigh",
  "surfacecontainerhighest",
  "inversesurface",
  "primaryfixed",
  "secondaryfixed",
  "tertiaryfixed",
];

const colorsWithoutOnTokens = [
  "onprimaryfixed",
  "primaryfixeddim",
  "onprimaryfixedvariant",
  "onsecondaryfixed",
  "secondaryfixeddim",
  "onsecondaryfixedvariant",
  "ontertiaryfixed",
  "tertiaryfixeddim",
  "ontertiaryfixedvariant",
  "surfacedim",
  "surfacebright",
  "outline",
  "outlinevariant",
];

export function getColorsWithoutOnTokens(): LkColor[] {
  return LkColors.filter((color) => !colorsWithOnTokens.includes(color as LkColorWithOnToken));
}

export function getOnToken(colorToken: LkColor) {
  //check if the token has an on-token in the first place

  // if (!colorsWithOnTokens.includes(colorToken as LkColorWithOnToken)) {
  //   throw new Error(`The color token "${colorToken}" does not have a corresponding "on-" token.`);
  // }

  const isAlreadyOnToken = colorToken.startsWith("on") || colorToken.startsWith("inverseon");
  const startsWithOn = colorToken.startsWith("on");
  const endsWithFixed = colorToken.endsWith("fixed");
  const endsWithDim = colorToken.endsWith("dim");
  const endsWithVariant = colorToken.endsWith("variant");

  function getFixedColorComplement(color: LkColor): string {
    // Assuming these variables are defined somewhere above
    // const endsWithFixed = color.endsWith('fixed');
    // const startsWithOn = color.startsWith('on');
    // const endsWithDim = color.endsWith('dim');
    // const endsWithVariant = color.endsWith('variant');

    switch (endsWithFixed) {
      case true:
        switch (startsWithOn) {
          case true:
            return color.slice(2);
          case false:
            return `on${color}`;
          default:
            return `on${color}`;  // ✅ Added default
        }

      case false: {
        switch (endsWithDim) {
          case true: {
            const rootColorDim = color.slice(0, -3);
            return `on${rootColorDim}variant`;
          }

          case false: {
            switch (endsWithVariant) {
              case true: {
                const rootColorVariant = color.slice(0, -8);
                return `on${rootColorVariant}fixed`;
              }
              case false:
                return `on${color}`;
              default:
                return `on${color}`;  // ✅ Added default
            }
          }

          default:
            return `on${color}`;  // ✅ Added default
        }
      }

      default:
        return `on${color}`;  // ✅ Added default at top level
    }
  }
  let tokenToReturn;
  //first, figure out if it's already an "on" token.

  switch (isAlreadyOnToken) {
    case false:
      switch (colorToken) {
        /**First, handle surfacecontainers and their variants */
        case "surfacecontainerlowest":
        case "surfacecontainerlow":
        case "surfacecontainer":
        case "surfacecontainerhigh":
        case "surfacecontainerhighest":
        case "surfacedim":
        case "surfacebright":
          tokenToReturn = `onsurface`;
          break;
        case "inversesurface":
          tokenToReturn = `inverseonsurface`;
          break;
        case "inverseprimary":
          tokenToReturn = "onprimarycontainer";
          break;
        case "shadow":
        case "scrim":
          tokenToReturn = "white";
          break;
        case "primaryfixeddim":
        case "secondaryfixeddim":
        case "tertiaryfixeddim":
        case "onprimaryfixed":
        case "onsecondaryfixed":
        case "ontertiaryfixed":
        case "onprimaryfixedvariant":
        case "onsecondaryfixedvariant":
        case "ontertiaryfixedvariant":
          tokenToReturn = getFixedColorComplement(colorToken);
          break;
        case "outline":
        case "outlinevariant":
          tokenToReturn = `onsurfacevariant`;
          break;
        default:
          tokenToReturn = `on${colorToken}`;
          break;
      }
      break;
    default:
      switch (colorToken) {
        case "inverseonsurface":
          tokenToReturn = `inversesurface`;
          break;
        default:
          /** If it's already an on-token, return the normal token. i.e. if it's "onprimary", return "primary" */
          tokenToReturn = colorToken.slice(2);
      }
  }

  //   const isContainerColor = colorToken.includes("container");

  return tokenToReturn;
}
