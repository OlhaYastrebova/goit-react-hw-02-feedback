import PropTypes from 'prop-types';
import { ButtonList, ButtonItem, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, handleClick }) => {
  return (
    <>
      <ButtonList>
        {options.map((option, index) => {
          const label = option.charAt(0).toUpperCase() + option.slice(1);

          return (
            <ButtonItem key={index}>
              <Button type="button" onClick={() => handleClick(option)}>
                {label}
              </Button>
            </ButtonItem>
          );
        })}
      </ButtonList>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};
