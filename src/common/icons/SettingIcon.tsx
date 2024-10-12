import SVGIcon, { SVGIconProps } from "./SVGIcon";

type ViewProps = Partial<SVGIconProps>;

const SettingIcon: React.FC<ViewProps> = ({ stroke = "#330E32", ...props }) => {
  return (
    <SVGIcon
      width="20" // default size
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="w-6 h-6 md:w-8 md:h-8" // Tailwind classes for responsive sizes
      {...props}
    >
        <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke={stroke}stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.66699 10.7334V9.26669C1.66699 8.40003 2.37533 7.68336 3.25033 7.68336C4.75866 7.68336 5.37533 6.6167 4.61699 5.30836C4.18366 4.55836 4.44199 3.58336 5.20033 3.15003L6.64199 2.32503C7.30033 1.93336 8.15033 2.1667 8.54199 2.82503L8.63366 2.98336C9.38366 4.2917 10.617 4.2917 11.3753 2.98336L11.467 2.82503C11.8587 2.1667 12.7087 1.93336 13.367 2.32503L14.8087 3.15003C15.567 3.58336 15.8253 4.55836 15.392 5.30836C14.6337 6.6167 15.2503 7.68336 16.7587 7.68336C17.6253 7.68336 18.342 8.39169 18.342 9.26669V10.7334C18.342 11.6 17.6337 12.3167 16.7587 12.3167C15.2503 12.3167 14.6337 13.3834 15.392 14.6917C15.8253 15.45 15.567 16.4167 14.8087 16.85L13.367 17.675C12.7087 18.0667 11.8587 17.8334 11.467 17.175L11.3753 17.0167C10.6253 15.7084 9.39199 15.7084 8.63366 17.0167L8.54199 17.175C8.15033 17.8334 7.30033 18.0667 6.64199 17.675L5.20033 16.85C4.44199 16.4167 4.18366 15.4417 4.61699 14.6917C5.37533 13.3834 4.75866 12.3167 3.25033 12.3167C2.37533 12.3167 1.66699 11.6 1.66699 10.7334Z" stroke={stroke} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </SVGIcon>
    );
};

export default SettingIcon;

