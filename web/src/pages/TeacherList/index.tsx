import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list">
      <PageHeader
        title="Estes são os proffys disponíveis."
        page="Estudar"
        icon="smile"
        descriptionIcon="Nós temos 32 professores."
      >
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subjects">Matéria</label>
            <input type="text" id="subjects" />
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList;