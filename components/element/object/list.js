import PrimaryButton from "@/components/buttons/PrimaryButton";

function List({label,content,buttonLabel,buttonLink}) {
  return (<>
  <div class="list-block">
          <div className="Left">
            <div className="Title text-xl font-bold">{label}</div>
            <div className="text-md">
              {content}
            </div>
          </div>
          <div className="Right">
            <PrimaryButton content={buttonLabel} link={buttonLink}></PrimaryButton>
          </div>
        </div>
  </>
  );
}

export default List;
