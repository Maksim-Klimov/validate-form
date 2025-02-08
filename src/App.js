import { useState } from "react";
import "./App.css";

function ValidateForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mail, setMail] = useState("");
  const [error, setError] = useState({});

  const formSubmit = (event) => {
    event.preventDefault();
    let erorrMessage = {};

    // Валидация поля на ввод имени
    if (name.length < 0 || name.length == "") {
      erorrMessage.name = "Ошибка! Введенное имя не соответствует требованиям!";
    }

    // Валидация поля на ввод возраста

    if (isNaN(age) || age < 0 || age.length == "") {
      erorrMessage.age =
        "Ошибка! Введенный возраст не соответствует требованиям!";
    }

    // Валидация поля на ввод корректного электронного ящика
    if (
      mail.length <= 0 ||
      mail.length == "" ||
      !mail.includes("@") ||
      !mail.includes(".")
    ) {
      erorrMessage.mail =
        "Ошибка! Введенный электронный ящик не соответствует требованиям!";
    }

    // Передача объекта ошибок
    setError(erorrMessage);

    // При успешном выполнении всех требованием выкидываем alert и делаем reset формы
    if (!erorrMessage.age && !erorrMessage.name && !erorrMessage.mail) {
      alert(
        `Вы прошли валидацию с именем ${name}, возрастом ${age} и электронной почтой ${mail}`
      );
      setName("");
      setAge("");
      setMail("");
    }
  };

  return (
    <div className="content">
      <div className="form-auth">
        <div className="form-auth__header">
          <span className="form-auth__title">Валидация полей формы</span>
        </div>
        <div className="form-auth__form">
          <form className="form" onSubmit={formSubmit}>
            <div className="form__body">
              <div className="form__field">
                <label htmlFor="userName">Имя</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={error.name ? "is--error" : ""}
                />
                {error.name ? <p>{error.name}</p> : ""}
              </div>
              <div className="form__field">
                <label htmlFor="userAge">Возраст</label>
                <input
                  type="text"
                  name="userAge"
                  placeholder="Ваш возраст"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className={error.age ? "is--error" : ""}
                />
                {error.age ? <p>{error.age}</p> : ""}
              </div>
              <div className="form__field">
                <label htmlFor="userMail">Электронная почта</label>
                <input
                  type="email"
                  name="userMail"
                  placeholder="Ваш email"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  className={error.mail ? "is--error" : ""}
                />
                {error.mail ? <p>{error.mail}</p> : ""}
              </div>
              <button type="submit">Отправить данные</button>
              {error.age || error.name || error.mail ? (
                <div className="form__error">
                  <p>
                    Ошибка при валидации! Вы допустили ошибку при заполнении
                    формы!
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ValidateForm;
