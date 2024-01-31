
    export type PropertyProps = {
       property : {
        label : string ;
        value : string | number ;
       }
    }

const PropertyData = ({property} : PropertyProps) => {
  return (
    <div>
 <p  className="bold-18">
              {property.label} :{" "}
              <span className="regular-16 ml-2 capitalize">
                {property.value}
              </span>
            </p>

    </div>
  )
}

export default PropertyData