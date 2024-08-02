import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductsArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({ product, onChange, value = 0, initialValues }: useProductsArgs) => {
  
  const [counter, setCounter] = useState<number>( initialValues?.count || value );
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {

    const maxValue = initialValues?.maxCount

    if (maxValue !== undefined) {
      const newValue = Math.max(counter + value, 0);
      if (newValue <= maxValue) {
        setCounter( newValue );
        onChange && onChange({ count: newValue, product  });
      }
    }

  }
  
  const reset = () => {
    setCounter(initialValues?.count || value);
  }

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter( value );
  }, [value]);

  return {
    counter,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,

    reset,
    increaseBy
  }

}