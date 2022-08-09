/* Importando a função createStore da biblioteca redux. */
import {createStore} from 'redux';

/* Importando a função tokenReducer do arquivo tokensReducer. */
import { tokenReducer } from './tokens/tokensReducer';

/* Criando uma store que manterá o estado da aplicação. */
const store = createStore(tokenReducer);

/* Exportando a variável store para que possa ser usada em outros arquivos. */
export default store;