export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          plan: 'free' | 'starter' | 'pro' | 'enterprise'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          plan?: 'free' | 'starter' | 'pro' | 'enterprise'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          plan?: 'free' | 'starter' | 'pro' | 'enterprise'
          created_at?: string
          updated_at?: string
        }
      }
      submissions: {
        Row: {
          id: string
          user_id: string | null
          artist_name: string
          genre: string | null
          location: string | null
          contact_email: string | null
          bio_inputs: Json
          social_links: Json
          music_links: Json
          press_links: string[] | null
          preferences: Json
          uploaded_files: Json
          status: 'pending' | 'building' | 'complete' | 'error'
          error_message: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          artist_name: string
          genre?: string | null
          location?: string | null
          contact_email?: string | null
          bio_inputs?: Json
          social_links?: Json
          music_links?: Json
          press_links?: string[] | null
          preferences?: Json
          uploaded_files?: Json
          status?: 'pending' | 'building' | 'complete' | 'error'
          error_message?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          artist_name?: string
          genre?: string | null
          location?: string | null
          contact_email?: string | null
          bio_inputs?: Json
          social_links?: Json
          music_links?: Json
          press_links?: string[] | null
          preferences?: Json
          uploaded_files?: Json
          status?: 'pending' | 'building' | 'complete' | 'error'
          error_message?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      epks: {
        Row: {
          id: string
          submission_id: string | null
          user_id: string | null
          slug: string
          template: string
          brand_profile: Json
          biography: Json
          website_sections: Json
          one_sheet: Json
          press_kit: Json
          public_profile: Json
          research_data: Json
          engagement_score: Json
          design_tokens: Json
          pdf_path: string | null
          site_html_path: string | null
          one_sheet_path: string | null
          site_live_url: string | null
          agent_log: Json
          status: 'building' | 'complete' | 'error'
          error_message: string | null
          views_count: number
          is_public: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          submission_id?: string | null
          user_id?: string | null
          slug: string
          template?: string
          brand_profile?: Json
          biography?: Json
          website_sections?: Json
          one_sheet?: Json
          press_kit?: Json
          public_profile?: Json
          research_data?: Json
          engagement_score?: Json
          design_tokens?: Json
          pdf_path?: string | null
          site_html_path?: string | null
          one_sheet_path?: string | null
          site_live_url?: string | null
          agent_log?: Json
          status?: 'building' | 'complete' | 'error'
          error_message?: string | null
          views_count?: number
          is_public?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          submission_id?: string | null
          user_id?: string | null
          slug?: string
          template?: string
          brand_profile?: Json
          biography?: Json
          website_sections?: Json
          one_sheet?: Json
          press_kit?: Json
          public_profile?: Json
          research_data?: Json
          engagement_score?: Json
          design_tokens?: Json
          pdf_path?: string | null
          site_html_path?: string | null
          one_sheet_path?: string | null
          site_live_url?: string | null
          agent_log?: Json
          status?: 'building' | 'complete' | 'error'
          error_message?: string | null
          views_count?: number
          is_public?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      chat_sessions: {
        Row: {
          id: string
          user_id: string | null
          submission_id: string | null
          messages: Json
          epk_data: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          submission_id?: string | null
          messages?: Json
          epk_data?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          submission_id?: string | null
          messages?: Json
          epk_data?: Json
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
