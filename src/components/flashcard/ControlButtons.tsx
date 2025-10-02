import Button from '../ui/button/'

interface ControlButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
}


const ControlButtons = ({ onPrevious, onNext }: ControlButtonsProps) => {
  return (
    <div>
      <div className="button-container">
        <Button
          label="Previous"
          variant={"outline"}
          size={"lg"}
          color="secondary"
          startIcon="chevrons-left"
          onClick={onPrevious}
        />
        <Button
          label="Next"
          variant={"outline"}
          size={"lg"}
          color="secondary"
          endIcon="chevrons-right"
          onClick={onNext}
        />
      </div>
    </div>
  )
}
export default ControlButtons
