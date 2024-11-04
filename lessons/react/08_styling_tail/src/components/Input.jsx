import { styled } from 'styled-components';

export default function Input ({$invalid, ...props}) {
  console.log($invalid);

    return (
        <> <input $invalid {...props} /> </>
    )
}