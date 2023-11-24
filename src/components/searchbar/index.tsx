import { Input } from '@chakra-ui/react';
  
  export const SearchBar: React.FC = () => (
(
        <Input 
            placeholder='Paste job ad url here'
            size='lg'
            variant='outline'
            colorScheme='red'
            sx={{ 
              borderRadius: 10,
              width: 500,
            }}
          />
    )
  )