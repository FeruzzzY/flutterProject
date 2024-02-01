import { useId, useState, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";

function CustomSelect(props, ref) {
  const { t } = useTranslation();
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);

  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "#fff",
      border: "2px solid rgba(3, 20, 42, 0.06)",
      borderRadius: "10px",
      borderColor: state.isFocused
        ? "rgba(3, 20, 42, 0.06)"
        : "rgba(3, 20, 42, 0.06)",
      padding: "2px",
      fontVariantNumeric: "lining-nums proportional-nums stacked-fractions",
      fontFeatureSettings: '"clig" off, "liga" off',
      "&:after": {
        border: "10px!important",
      },
      "&:focus": {
        border: "10px solid red!important",
      },
      color: "#646D79",
      paddingLeft: props.pLeft || "0",
      fontSize: "14px",
      lineHeight: "1.25rem",
      position: "relative",
      zIndex: "30",
      // marginTop: "6px",
    }),
    dropdownIndicator: (baseStyles, state) => ({
      ...baseStyles,
      padding: "6px",
      paddingRight: "16px",
      color: "#646D79",
      width: "40px",
      position: "relative",
      zIndex: "30",
    }),
    clearIndicator: (baseStyles, state) => ({
      ...baseStyles,
      display: "none",
    }),
  };

  return (
    <Select
      {...props}
      ref={ref}
      instanceId={useId()}
      components={{
        IndicatorSeparator: () => null,
      }}
      className={`text-sm disabled:cursor-not-allowed ${props.className}`}
      isClearable={isClearable}
      isSearchable={isSearchable}
      styles={customStyles}
      placeholder={props.placeholder || t("select")}
    />
  );
}

const ref = forwardRef((props, ref) => CustomSelect(props, ref));

ref.displayName = "CustomSelect";

export default ref;
