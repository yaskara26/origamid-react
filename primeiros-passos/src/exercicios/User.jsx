import React from 'react'

  const formFields = [
    {
      id: 'nome',
      label: 'Nome',
      type: 'text',
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
    }
    {
      id: 'senha',
      label: 'Senha',
      type: 'password',
    }
  ]

  const User = () => {
    const [form, setForm] =React.useState({
      nome: '',
      email: '',
      senha: '',
      cep: '',
      rua: '',
      bairro: '',
      cidade: '',
      estado: '',
    });

    function handleChange({target}) {
      const {id, value} = target;
      setForm({...form, [id]: value})
    }

    return (
    <form action="">
      {formFields.map(({id, label, type}) => 
        <div>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange}/>
        </div>
        )}
    </form>)
  }

export default user
