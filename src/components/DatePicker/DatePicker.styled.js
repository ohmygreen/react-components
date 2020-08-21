import styled from 'styled-components';
import { colors } from '../../shared';

const DatePickerStyled = styled.div.attrs((props) => ({
  className: `rc-date-picker ${props.className ? props.className : ''}`,
}))`

	.react-datepicker__tab-loop { 
		display: inherit;
  }

	.react-datepicker__week-number{
		color: #02242f;
  }

	.react-datepicker {
		font-family: 'Roboto', 'Brandon-Text', 'Helvetica Neue', sans-serif;
		padding: 14px;

		.react-datepicker__navigation {
			top: 21px;
    }

    .react-datepicker__year-wrapper {
      max-width: 195px;
    }

		.react-datepicker__header {
			background-color: #fff;
			border-bottom: 0;
			padding-top: 4px;

			.react-datepicker__current-month, &.react-datepicker-year-header {
				color: ${colors.grey600};
				font-weight: 500;
      }

			.react-datepicker__day-names {
				margin: 14px 0 8px 0;
				text-transform: uppercase;
      
				.react-datepicker__day-name {
					color: ${colors.grey400};
					font-weight: bold;
					margin: 4px;
        }
      }
    }

		.react-datepicker__month {
			margin-bottom: 0;
    }

		.react-datepicker__day-name, 
    .react-datepicker__month-text,
    .react-datepicker__quarter-text,
    .react-datepicker__year-text {
			color: ${colors.grey800};
			font-size: 12px;
      display: inline-block;
      line-height: 1.7rem;
      text-align: center;
    }

    
    .react-datepicker__month--selected, 
    .react-datepicker__month--in-selecting-range, 
    .react-datepicker__month--in-range, 
    .react-datepicker__quarter--selected, 
    .react-datepicker__quarter--in-selecting-range, 
    .react-datepicker__quarter--in-range,
    .react-datepicker__day--selected, 
    .react-datepicker__day--in-selecting-range, 
    .react-datepicker__day--in-range, 
    .react-datepicker__month-text--selected, 
    .react-datepicker__month--selected,
    .react-datepicker__month-text--in-selecting-range, 
    .react-datepicker__month-text--in-range, 
    .react-datepicker__quarter-text--selected, 
    .react-datepicker__quarter-text--in-selecting-range, 
    .react-datepicker__quarter-text--in-range, 
    .react-datepicker__year-text--selected, 
    .react-datepicker__year-text--in-selecting-range, 
    .react-datepicker__year-text--in-range {
      color: #fff;
      font-weight: 500;
    }

		.react-datepicker__day, .react-datepicker__month-text, .react-datepicker__quarter-text, .react-datepicker__year-text {
			margin: 4px;
			outline: none;
    }
			
		.react-datepicker__year-text {
			margin: 4px 0;
    }

		.react-datepicker__day--outside-month {
			color: ${colors.grey400};
    }
  }
`;

export default DatePickerStyled;
