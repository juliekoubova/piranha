import { always } from 'piranha-ts';
import * as Experimentation from './experimentation';

always(true, () => Experimentation.getInstance().isToggleEnabled(Experimentation.ALWAYS_TRUE));
always(false, () => Experimentation.getInstance().isToggleEnabled(Experimentation.ALWAYS_FALSE));