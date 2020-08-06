import React, { useState, FormEvent } from 'react';
import api from '../../services/api';
import { useAxios } from '../../hooks/useAxios';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input'
import Select from '../../components/Select';

import './styles.css';

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');
  const [teachers, setTeachers] = useState([]);
  const { data } = useAxios<{ total: number }>('users')

  function searchTeacher(e: FormEvent) {
    e.preventDefault();
    api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    }).then(response => {
      setTeachers(response.data)
      console.log(response.data)
    })
  }
  return (
    <div id="page-teacher-list">
      <PageHeader
        title="Estes são os proffys disponíveis."
        page="Estudar"
        icon="smile"
        descriptionIcon={`Nós temos ${data?.total} professores.`}
      >
        <form id="search-teachers" onSubmit={searchTeacher}>
          <Select
            value={subject}
            onChange={e => setSubject(e.target.value)}
            options={[
              {
                label: "Artes",
                value: "Artes"
              },
              {
                label: "Matemática",
                value: "Matemática"
              },
              {
                label: "Português",
                value: "Português"
              },
            ]}
            label="Matéria"
            name="subject"
          />
          <Select
            value={week_day}
            onChange={e => setWeek_day(e.target.value)}
            options={[
              {
                value: "0",
                label: "Domingo"
              },
              {
                value: "1",
                label: "Segunda-feira"
              },
              {
                value: "2",
                label: "Terça-feira"
              },
              {
                value: "3",
                label: "Quarta-feira"
              },
              {
                value: "4",
                label: "Quinta-feira"
              },
              {
                value: "5",
                label: "Sexta-feira"
              },
              {
                value: "6",
                label: "Sabado"
              },
            ]}
            label="Dia da semana" name="week_day"
          />
          <Input
            label="Hora"
            name="time"
            type="time"
            value={time}
            onChange={e => setTime(e.target.value)}
          />
          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {
          teachers.map((teacher, index) => (
            <TeacherItem key={index} teacher={teacher} />
          ))
        }
        <footer className="no-list">
          {
            teachers.length > 0
              ? <p>Estes são todos os resultados</p>
              : <p>Nenhum professor encontrado <br /> com sua pesquisa.</p>
          }
        </footer>
      </main>
    </div>
  )
}

export default TeacherList;