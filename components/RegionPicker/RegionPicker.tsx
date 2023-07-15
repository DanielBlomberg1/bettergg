import Select from "react-select";

export interface IRegionPicker {
  onChange: (value: string) => void;
}

const options = [
  { value: "eun1", label: "eune" },
  { value: "euw1", label: "euw" },
  { value: "na1", label: "na" },
  { value: "kr", label: "kr" },
  { value: "jp1", label: "jp" },
  { value: "br1", label: "br" },
  { value: "la1", label: "lan" },
  { value: "la2", label: "las" },
  { value: "oc1", label: "oce" },
  { value: "ru", label: "ru" },
  { value: "tr1", label: "tr" },
];

const darkTheme = (theme: any) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: "#2b2b2b",
    primary50: "#2b2b2b",
    primary75: "#2b2b2b",
    primary: "#fff",
    neutral0: "#2b2b2b",
    neutral5: "#fff",
    neutral10: "#fff",
    neutral20: "#fff",
    neutral30: "#fff",
    neutral40: "#fff",
    neutral50: "#fff",
    neutral60: "#fff",
    neutral70: "#fff",
    neutral80: "#fff",
    neutral90: "#fff",
  },
});

const RegionPicker: React.FC<IRegionPicker> = ({ onChange }) => {
  function handleChange(selectedOption: any): void {
    onChange(selectedOption.value);
  }

  return (
    <Select
      className="react-select"
      theme={darkTheme}
      options={options}
      defaultValue={options[0]}
      onChange={handleChange}
      styles={{
        container: (provided) => ({
          ...provided,
          width: "15vh",
        }),
        control: (provided) => ({
          ...provided,
          height: "5vh",
          marginTop: "0.5vh",
          borderColor: "#808080",
        }),
      }}
    />
  );
};

export default RegionPicker;
