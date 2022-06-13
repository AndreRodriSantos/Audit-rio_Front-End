import { React, Component } from "react"
import '../css/Calendar.css'
import { fazGet, reserva } from "../Js/API";

export default class Calendario extends Component {
    render() {
        return (
            <div className="light">
                <div className="calendar" onLoad={chamaCalendar()}>
                    <div className="calendar_header">
                        <span className="month_picker" id="month_picker">February</span>
                        <div className="year_picker">
                            <span className="year_change" id="prev_year">
                                <pre><i className="fa fa-chevron-left" aria-hidden="true"></i></pre>
                            </span>
                            <span id="year">2021</span>
                            <span className="year_change" id="next_year">
                                <pre><i className="fa fa-chevron-right" aria-hidden="true"></i></pre>
                            </span>
                        </div>
                    </div>
                    <div className="calendar_body">
                        <div className="calendar_week_day">
                            <div>D</div>
                            <div>S</div>
                            <div>T</div>
                            <div>Q</div>
                            <div>Q</div>
                            <div>S</div>
                            <div>S</div>
                        </div>
                        <div className="calendar_days"></div>
                    </div>
                    <div className="month_list"></div>
                </div>
            </div>
        )
    }
}
function chamaCalendar() {
    setTimeout(() => {
        let calendar = document.querySelector('.calendar')

        const month_names = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

        let isLeapYear = (year) => {
            return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)
        }

        let getFebDays = (year) => {
            return isLeapYear(year) ? 29 : 28
        }

        let generateCalendar = (month, year) => {

            let calendar_days = calendar.querySelector('.calendar_days')
            let calendar_header_year = calendar.querySelector('#year')
            document.querySelector('#month_picker').setAttribute("data_month", month + 1)

            let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

            calendar_days.innerHTML = ''

            let currDate = new Date()
            if (month == null) month = currDate.getMonth()
            if (!year) year = currDate.getFullYear()

            let curr_month = `${month_names[month]}`
            month_picker.innerHTML = curr_month
            calendar_header_year.innerHTML = year

            // get first day of month

            let first_day = new Date(year, month, 1)

            for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
                let day = document.createElement('div')
                if (i >= first_day.getDay()) {
                    day.classList.add('calendar_day_hover')
                    day.innerHTML = i - first_day.getDay() + 1
                    day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`

                    if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                        day.classList.add('curr_date')
                        day.title = "Hoje"
                    }
                }

                day.addEventListener('click', function () {
                    limparClasse()
                    day.classList.add("day_selected")
                })

                calendar_days.appendChild(day)
            }

            let reservas = fazGet("http://localhost:8080/api/reservation")
            reservas = JSON.parse(reservas)

            let dias = document.querySelectorAll('.calendar_days > *');
            for (let index = 0; index < dias.length; index++) {
                let dia = dias[index]

                let mes = document.getElementById("month_picker").getAttribute("data_month")
                let ano = document.getElementById("year").textContent
                let diaFormat = dia.textContent.replaceAll(" ", "") + ""
                diaFormat = diaFormat.replaceAll("\n", "")

                let data = diaFormat + "-" + mes + "-" + ano

                for (let i = 0; i < reservas.length; i++) {
                    let reserva = reservas[i]
                    let dataInicio = (JSON.stringify(reserva.dataInicio))
                    dataInicio = dataInicio.substring(0, 11)
                    dataInicio = dataFormatadaCalendar(dataInicio)
                    

                    if(dataInicio == data){
                        dia.style.background = "green"
                        dia.style.color = "white"
                        dia.title = reserva.titulo
                        
                    }
                }
            }

            
        }

        function dataFormatadaCalendar(date) {
            var data = new Date(date),
                dia = data.getDate(),
                dia = (dia).toString(),
                mes = (data.getMonth() + 1).toString(),
                anoF = data.getFullYear();
            return dia + "-" + mes + "-" + anoF;
        }


        function limparClasse() {
            let filhos = document.querySelectorAll('.calendar_days > *');
            for (let index = 0; index < filhos.length; index++) {
                let day = filhos[index]
                day.classList.remove("day_selected")
            }
        }

        let month_list = calendar.querySelector('.month_list')

        month_names.forEach((e, index) => {
            let month = document.createElement('div')
            month.innerHTML = `<div data_month="${index}">${e}</div>`
            month.querySelector('div').onclick = () => {
                document.querySelector('#month_picker').setAttribute("data_month", index + 1)
                month_list.classList.remove('show')
                curr_month.value = index
                generateCalendar(index, curr_year.value)
            }
            month_list.appendChild(month)
        })

        let month_picker = calendar.querySelector('#month_picker')

        month_picker.onclick = () => {
            month_list.classList.add('show')
        }

        let currDate = new Date()

        let curr_month = { value: currDate.getMonth() }
        let curr_year = { value: currDate.getFullYear() }

        generateCalendar(curr_month.value, curr_year.value)

        document.querySelector('#prev_year').onclick = () => {
            --curr_year.value
            generateCalendar(curr_month.value, curr_year.value)
        }

        document.querySelector('#next_year').onclick = () => {
            ++curr_year.value
            generateCalendar(curr_month.value, curr_year.value)
        }
    }, 5);
}


