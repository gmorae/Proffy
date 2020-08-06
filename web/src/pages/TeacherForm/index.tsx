import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

const TeacherForm: React.FC = () => {

  const history = useHistory()

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ])

  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')
  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, {
      week_day: 0,
      from: '',
      to: ''
    }])
  }

  function setScheduleItemValue(scheduleItemPosition: number, field: string, value: string) {
    const updatedSchedule = scheduleItems.map((scheduleItem, index) => {
      if (index === scheduleItemPosition) {
        return { ...scheduleItem, [field]: value }
      }
      return scheduleItem
    })
    setScheduleItems(updatedSchedule)

  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault()
    const data = {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: +cost,
      schedule: scheduleItems
    }
    api.post('classes', data).then(() => {
      history.push('/successfully-registered')
    }).catch(() => {
      alert('Erro ao cadastrar')
    })
  }

  return (
    <div id="page-teacher-form">
      <PageHeader
        title="Que incrível que você quer dar aula"
        page="Dar aula"
        icon="rocket"
        descriptionIcon="Prepare-se! vai ser o máximo"
        description="O primeiro passo, é preencher esse formulário de inscrição"
      />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              label="Nome Completo"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input
              label="Avatar url"
              name="avatar"
              value={avatar}
              onChange={e => setAvatar(e.target.value)}
            />
            <Input
              label="Whatsapp"
              name="whatsapp"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />
            <Textarea
              label="Bio"
              name="bio"
              value={bio}
              onChange={e => setBio(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
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
            <Input
              label="Custo da sua hora por aula"
              name="cost"
              value={cost}
              onChange={e => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Seus dados
            <button type="button" onClick={addNewScheduleItem}>
                + Novo Horário
            </button>
            </legend>
            {
              scheduleItems.map((scheduleItem, index) => (
                <div className="schedule-item" key={scheduleItem.week_day}>
                  <Select
                    value={scheduleItem.week_day}
                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                    options={[
                      { value: "0", label: "Domingo" },
                      { value: "1", label: "Segunda-feira" },
                      { value: "2", label: "Terça-feira" },
                      { value: "3", label: "Quarta-feira" },
                      { value: "4", label: "Quinta-feira" },
                      { value: "5", label: "Sexta-feira" },
                      { value: "6", label: "Sábado" },
                    ]}
                    label="Dia da semana" name="week_day"
                  />
                  <Input
                    value={scheduleItem.from}
                    label="Das"
                    name="from"
                    type="time"
                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                  />
                  <Input
                    value={scheduleItem.to}
                    label="Até"
                    name="to"
                    type="time"
                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                  />
                </div>
              ))
            }
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
            <button type="submit">
              Salvar cadastro
          </button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm;