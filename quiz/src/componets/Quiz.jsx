import { Input, Select } from '@chakra-ui/react'
const Quiz =()=>{
    return (
        <div>
            <h1>Set uo your Quiz </h1>

            {/* <Input placeholder = 'Enter your name'/> */}
            
   <Input placeholder='Enter your name' size='lg' />
   <Select placeholder='Category'>
  <option value='option1'>General knowledge</option>
  <option value='option2'>Sports</option>
  <option value='option3'>Geography</option>
</Select>
<Select placeholder='Difficulty level'>
  <option value='option1'> easy</option>
  <option value='option2'>medium</option>
  <option value='option3'>hard</option>
</Select>
   <Input placeholder='Choose number of question' size='lg' />
 

        </div>
    )
}

export default Quiz;