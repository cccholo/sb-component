import './MyLabel.css'

export interface MyLabelProps{
    /**
   * Este es el mensaje a mostrar en la etiqueta
   */
  label:string;
    /**
   * Este es el tamaño de la etiqueta
   */
  size: 'normal'|'h1'|'h2'|'h3';
    /**
   * Este es color de la etiqueta
   */
  color: 'text-primary'|'text-secondary'|'text-tertiary';
    /**
   * Mayuscula o no de la etiqueta
   */
  allCaps:boolean;
    /**
   * Que background color usa
   */
  fontColor?: string;
}


export const Mylabel = ({
  label='No Label',
  size= 'normal',
  allCaps = true,
  color='text-primary',
  fontColor
}:MyLabelProps) => {
  return (
    <span 
    className={` label ${ size } ${ color }  `}
    style={{ color:fontColor }}
    >
      { allCaps ? label.toUpperCase() : label }</span>
  )
}
