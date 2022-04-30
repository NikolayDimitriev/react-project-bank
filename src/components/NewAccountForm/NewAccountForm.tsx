import React from "react";
import MaskedInput from "react-maskedinput";
import cn from "classnames";

import Button from "../Button/Button";

import styles from "./NewAccountForm.module.css";

export default class NewAccountForm extends React.Component<any, any> {
  inputCard: React.RefObject<any>;
  inputMonth: React.RefObject<any>;
  inputYear: React.RefObject<any>;
  constructor(props) {
    super(props);

    this.inputCard = React.createRef();
    this.inputMonth = React.createRef();
    this.inputYear = React.createRef();

    this.state = {
      month: "",
      year: "",
      cardNumber: "",
    };
  }

  addClassToInput = (input) => {
    input.classList.add(styles.invalidInput);
  };

  checkOnEmptyLine = (line, node) => {
    if (line === "") {
      this.addClassToInput(node);
      return true;
    }
  };

  checkUnderscores = (line, node) => {
    if (line.includes("_")) {
      this.addClassToInput(node);
      return true;
    }
    return false;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const inputCard = this.inputCard.current.input;
    const inputMonth = this.inputMonth.current.input;
    const inputYear = this.inputYear.current.input;

    const isEmptyInputCard = this.checkOnEmptyLine(
      this.state.cardNumber,
      inputCard
    );
    const isEmptyInputMonth = this.checkOnEmptyLine(
      this.state.month,
      inputMonth
    );
    const isEmptyInputYear = this.checkOnEmptyLine(this.state.year, inputYear);
    const isHaveUnderscoresCard = this.checkUnderscores(
      this.state.cardNumber,
      inputCard
    );
    const isHaveUnderscoresMonth = this.checkUnderscores(
      this.state.month,
      inputMonth
    );
    const isHaveUnderscoresYear = this.checkUnderscores(
      this.state.year,
      inputYear
    );

    if (isEmptyInputCard || isEmptyInputMonth || isEmptyInputYear) {
      // хотя бы одна пустая строка
      return;
    }

    if (
      isHaveUnderscoresCard ||
      isHaveUnderscoresMonth ||
      isHaveUnderscoresYear
    ) {
      // хотя бы одна cодержит нижнее подчеркивание
      return;
    }

    const dateNow: Date = new Date();
    const month = dateNow.getMonth() + 1; // 4 (april now)
    const year = +dateNow.getFullYear().toString().slice(-2); // 22

    if (this.state.year < year) {
      this.addClassToInput(inputYear);
      return;
    }

    if (this.state.month === "00" || this.state.month > 12) {
      this.addClassToInput(inputMonth);
      return;
    }

    if (this.state.month < month && this.state.year <= year) {
      this.addClassToInput(inputMonth);
      this.addClassToInput(inputYear);
      return;
    }

    this.props.handleSubmit({
      id: Date.now(),
      type: "external",
      title: `Привязанная карта *${this.state.cardNumber.slice(-4)}`,
    });

    this.setState({
      cardNumber: "",
      month: "",
      year: "",
    });
  };

  handleInputChange = (event) => {
    if (
      event.target.value.replaceAll("_", "").length === event.target.maxLength
    ) {
      // заменяю все _ на '', чтобы не учитывать их в длине
      event.target.classList.remove(styles.invalidInput);
    }

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Привязка банковской карты</h2>
        <div className={styles.cardForm}>
          <MaskedInput
            mask="1111 1111 1111 1111"
            name="cardNumber"
            value={this.state.cardNumber}
            onChange={this.handleInputChange}
            placeholder="Номер карты"
            className={styles.input}
            ref={this.inputCard}
          />
          <div className={styles.validThruFieldset}>
            <span className={styles.label}>VALID THRU</span>
            <MaskedInput
              mask="11"
              name="month"
              value={this.state.month}
              onChange={this.handleInputChange}
              placeholder="MM"
              className={cn(styles.inputDate, styles.input)}
              ref={this.inputMonth}
            />
            <span>/</span>
            <MaskedInput
              mask="11"
              name="year"
              value={this.state.year}
              onChange={this.handleInputChange}
              placeholder="YY"
              className={cn(styles.inputDate, styles.input)}
              ref={this.inputYear}
            />
          </div>
          <Button type="submit">Привязать</Button>
        </div>
      </form>
    );
  }
}
