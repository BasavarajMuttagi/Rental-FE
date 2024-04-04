import { useRef } from "react";

function Test() {
  const testref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <label
        htmlFor="myinput"
        onClick={() => {
          testref.current?.showPicker()
        }}
      >
        Click Here to see the list
        <input
          ref={testref}
          id="myinput"
          type="text"
          list="browsers"
          className="hidden"
        />
      </label>
      <datalist id="browsers">
        <option value="Edge" />
        <option value="Firefox" />
        <option value="Chrome" />
        <option value="Opera" />
        <option value="Safari" />
      </datalist>
    </div>
  );
}

export default Test;
