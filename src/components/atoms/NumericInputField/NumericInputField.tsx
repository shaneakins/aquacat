type Props = {
  onFocus: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
};
const NumericInputField = (props: Props) => {
  const { onFocus = undefined, onChange = undefined, ...restProps } = props;
  return (
    <input
      type="number"
      className="text-center text-xl text-gray-700"
      onFocus={onFocus}
      onChange={onChange}
      {...restProps}
    />
  );
};
export default NumericInputField;
