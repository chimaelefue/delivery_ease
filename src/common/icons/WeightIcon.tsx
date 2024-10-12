import SVGIcon, { SVGIconProps } from "./SVGIcon";

type ViewProps = Partial<SVGIconProps>;

const WeightIcon: React.FC<ViewProps> = ({ stroke = "#330E32", ...props }) => {
  return (
    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.25 13.96h8.5l-1.01-7.083H5.26L4.25 13.96zm4.25-8.5c.2007 0 .368 0 .5048-.135C9.6423 5.39033 9.71 5.11833 9.71 4.75c0-.20022-.0677-.36883-.1866-.49433C9.0536 4.10967 8.8755 4.04167 8.625 4.04167c-.2007 0-.368 0-.5048.135C8.1842 4.39033 8.1167 4.66233 8.1167 4.75c0 .20022.0677.36883.1866.49433C8.8535 5.39033 9.0317 5.45833 9.25 5.45833zm2.001 0h1.2398c.3541 0 .6611.11806.9207.35417.2597.2361.419 0 .6794.2361L14.15 13.7635c.059 0-.1.12-.15.15-.3422.4285-.7612.6345-1.2329.6345H4.25c-.4368 0-.7941-.1627-1.0718-.4839C2.9008 14.564 2.7917 14.189 2.8512 13.7635L3.86057 6.68021c.059 0 .12-.12.15-.15.3422-.4285.7612-.6345 1.2329-.6345h1.2398c-.0355-.11771-.0652-.2327-.0887-.3481-.0235-.1154-.0541-.2303-.0965-.3416C6.37516 4.15972 6.58175 3.65799 6.99495 3.24479C7.40814 2.8316 7.90988 2.625 8.50016 2.625c.5904 0 1.0921.2066 1.5054.6198C10.4186 3.65799 10.6252 4.15972 10.6252 4.75c0 .1198 0 .2409-.0247.3533-.0247.1124-.0546.2273-.0965.3416C10.5513 5.34028 10.5208 5.22529 10.5012 5.45833z" fill="black"/>
    </svg>
    );
};

export default WeightIcon;