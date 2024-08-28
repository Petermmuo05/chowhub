import { signInAction } from "@/_lib/actions";

export default function SignInButton() {
  return (
    <form action={signInAction}>
      <button
        type="submit"
        className={`cool-button text-[#333333] shadowbutton font-semibold w-fit  text-medium px-12 py-3 max-sm:w-full max-sm:text-center max-sm:text-[10px] max-sm:px-[3vw] max-sm:py-2 bg-[#FF8C00] rounded-[25px] `}
      >
        Sign In With Google
      </button>
    </form>
  );
}
