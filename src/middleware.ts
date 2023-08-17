import { NextResponse, type NextRequest } from "next/server";
import { initFirebaseAuth } from "./utils/authentication";

async function checkUserChanged() {
  return new Promise((resolve, reject) => {
    initFirebaseAuth((user) => {
      resolve(user);
    })
  }
  )
}

export async function middleware(request: NextRequest) {
  let auth = await checkUserChanged();

  if (!auth) {
    return NextResponse.redirect(new URL("/auth", request.url));
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/admin",
};
