import { FormContainer, MinutesAmountInputs, TaskInputs } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle, cycles } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInputs
        id="task"
        type="text"
        list="task-suggestions"
        placeholder="Dê um nome para seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        {cycles.map((cycle) => {
          return <option value={cycle.task} key={cycle.id}></option>
        })}
      </datalist>

      <label htmlFor="minutsAmount">durante</label>
      <MinutesAmountInputs
        id="minutsAmount"
        type="number"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        list="minutes-suggestions"
        disabled={!!activeCycle}
        {...register('minutsAmount', { valueAsNumber: true })}
      />

      <datalist id="minutes-suggestions">
        <option value="5" />
        <option value="10" />
        <option value="15" />
        <option value="20" />
        <option value="25" />
        <option value="30" />
        <option value="35" />
        <option value="40" />
        <option value="45" />
        <option value="50" />
        <option value="55" />
        <option value="60" />
      </datalist>

      <span>minutos.</span>
    </FormContainer>
  )
}
