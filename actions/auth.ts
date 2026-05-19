"use server";

import { createClient } from "@/lib/supabase/server";
import crypto from "crypto";

const generateTempPassword = () => crypto.randomBytes(16).toString("base64url");

const registerUser = async (email: string) => {
  const supabase = await createClient();

  const tempPassword = generateTempPassword();

  const redirectTo = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback?next=/change-password`;
  const { data, error } = await supabase.auth.signUp({
    email,
    password: tempPassword,
    options: {
      emailRedirectTo: redirectTo,
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const resetPassword = async (email: string) => {
  const supabase = await createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback?next=/change-password`,
  });

  if (error) {
    throw new Error(error.message);
  }
};

const updateUser = async (password: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.updateUser({
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const loginUser = async (email: string, password: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const logoutUser = async () => {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
};

const getPrincipal = async () => {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return user?.email;
};

export {
  registerUser,
  loginUser,
  updateUser,
  logoutUser,
  resetPassword,
  getPrincipal,
};
