import styled from 'styled-components';
import { shade } from 'polished';

import ArrowRightIcon from '../../assets/images/icons/arrow-right.svg';
import ArrowLeftIcon from '../../assets/images/icons/arrow-left.svg';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 2rem 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 5rem;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5rem;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    line-height: 1.5rem;

    span {
      color: #f4fde8;
    }

    a {
      text-decoration: none;
      color: #ff9000;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;
export const Schedule = styled.section`
  flex: 1;
  margin-right: 7.5rem;

  h1 {
    font-size: 2.25rem;
  }

  p {
    margin-top: 0.5rem;
    color: #ff9000;
    display: flex;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: #ff9000;
      margin: 0 0.5rem;
    }
  }
`;

export const NextAppointment = styled.section`
  margin-top: 4rem;

  > strong {
    color: #999591;
    font-size: 1.25rem;
    font-weight: 400;
  }

  div {
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    border-radius: 0.625rem;
    margin-top: 1.5rem;
    position: relative;

    &::before {
      position: absolute;
      content: '';
      width: 2px;
      height: 80%;
      background: #ff9000;
      left: 0;
      top: 10%;
      border-radius: 0.6rem;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 1.5rem;
      color: #fff;
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #999591;

      svg {
        color: #ff9000;
        margin-right: 0.5rem;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 3rem;

  > strong {
    color: #999591;
    font-size: 1.25rem;
    line-height: 1.6rem;
    border-bottom: 1px solid #3e3b47;
    display: block;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }

  > p {
    color: #999591;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 1rem;
  }

  span {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: #f4ede8;

    svg {
      color: #ff9000;
      margin-right: 0.5rem;
    }
  }

  div {
    flex: 1;
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    border-radius: 0.6rem;
    margin-left: 1.5rem;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }

    strong {
      margin-left: 1.5rem;
      color: #fff;
      font-size: 1.25rem;
    }
  }
`;

export const Calendar = styled.aside`
  width: 360px;

  .DayPicker {
    border-radius: 0.6rem;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    background: #3e3b47;
    border-radius: 0.6rem;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-NavButton {
    color: #999591 !important;
  }

  .DayPicker-NavButton--prev {
    background: url(${ArrowLeftIcon}) no-repeat center;
    right: auto;
    left: 1.5em;
    margin-right: 0;
  }

  .DayPicker-NavButton--next {
    background: url(${ArrowRightIcon}) no-repeat center;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 1rem 0 0 0;
    padding: 16px;
    background-color: #28262e;
    border-radius: 0 0 10px 10px;
  }

  .DayPicker-Caption {
    margin-bottom: 1rem;
    padding: 0 1rem;
    color: #f4ede8;

    > div {
      text-align: center;
    }
  }

  .DayPicker-Weekday {
    color: #666360;
  }

  .DayPicker-Day {
    width: 2.5rem;
    height: 2.5rem;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 0.6rem;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
    color: #fff;
  }

  .DayPicker-Day--disabled {
    color: #666360;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 0.6rem;
    color: #232129 !important;
  }
`;
