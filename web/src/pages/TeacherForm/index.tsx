import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-form">
      <PageHeader
        title="Que incrível que você quer dar aula"
        page="Dar aula"
        icon="rocket"
        descriptionIcon="Prepare-se! vai ser o máximo"
        description="O primeiro passo, é preencher esse formulário de inscrição"
      />
    </div>
  )
}

export default TeacherForm;