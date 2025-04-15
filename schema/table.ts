export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      account: {
        Row: {
          created_at: string;
          display_name: string | null;
          email: string | null;
          first_name: string | null;
          id: number;
          last_name: string | null;
          profile_picture: string | null;
          profile_picture_mime_type: string | null;
          title: string | null;
          updated_at: string | null;
        };
        Insert: {
          created_at: string;
          display_name?: string | null;
          email?: string | null;
          first_name?: string | null;
          id?: number;
          last_name?: string | null;
          profile_picture?: string | null;
          profile_picture_mime_type?: string | null;
          title?: string | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          display_name?: string | null;
          email?: string | null;
          first_name?: string | null;
          id?: number;
          last_name?: string | null;
          profile_picture?: string | null;
          profile_picture_mime_type?: string | null;
          title?: string | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      account_permission: {
        Row: {
          account_id: number;
          created_at: string;
          permission_id: number;
          updated_at: string | null;
        };
        Insert: {
          account_id: number;
          created_at?: string;
          permission_id?: number;
          updated_at?: string | null;
        };
        Update: {
          account_id?: number;
          created_at?: string;
          permission_id?: number;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "account_permission_account_id_fkey";
            columns: ["account_id"];
            isOneToOne: false;
            referencedRelation: "account";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "account_permission_permission_id_fkey";
            columns: ["permission_id"];
            isOneToOne: false;
            referencedRelation: "permission";
            referencedColumns: ["id"];
          },
        ];
      };
      achievement: {
        Row: {
          content: string | null;
          created_at: string;
          created_by: number | null;
          faculty_id: number | null;
          id: number;
          image: string | null;
          image_mime_type: string | null;
          kind: string | null;
          title: string | null;
          updated_at: string | null;
        };
        Insert: {
          content?: string | null;
          created_at?: string;
          created_by?: number | null;
          faculty_id?: number | null;
          id?: number;
          image?: string | null;
          image_mime_type?: string | null;
          kind?: string | null;
          title?: string | null;
          updated_at?: string | null;
        };
        Update: {
          content?: string | null;
          created_at?: string;
          created_by?: number | null;
          faculty_id?: number | null;
          id?: number;
          image?: string | null;
          image_mime_type?: string | null;
          kind?: string | null;
          title?: string | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "achievement_created_by_fkey";
            columns: ["created_by"];
            isOneToOne: false;
            referencedRelation: "account";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "achievement_faculty_id_fkey";
            columns: ["faculty_id"];
            isOneToOne: false;
            referencedRelation: "faculty";
            referencedColumns: ["id"];
          },
        ];
      };
      alumni_testimonial: {
        Row: {
          created_at: string;
          description: string | null;
          id: number;
          image: string | null;
          image_mime_type: string | null;
          major_id: number | null;
          name: string | null;
          title: string | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: number;
          image?: string | null;
          image_mime_type?: string | null;
          major_id?: number | null;
          name?: string | null;
          title?: string | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: number;
          image?: string | null;
          image_mime_type?: string | null;
          major_id?: number | null;
          name?: string | null;
          title?: string | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "alumni_testimonial_major_id_fkey";
            columns: ["major_id"];
            isOneToOne: false;
            referencedRelation: "major";
            referencedColumns: ["id"];
          },
        ];
      };
      application: {
        Row: {
          created_at: string;
          created_by: number | null;
          description: string | null;
          id: number;
          instance_id: number | null;
          kind: string | null;
          name: string | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          created_by?: number | null;
          description?: string | null;
          id?: number;
          instance_id?: number | null;
          kind?: string | null;
          name?: string | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          created_by?: number | null;
          description?: string | null;
          id?: number;
          instance_id?: number | null;
          kind?: string | null;
          name?: string | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "application_created_by_fkey";
            columns: ["created_by"];
            isOneToOne: false;
            referencedRelation: "account";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "application_instance_id_fkey";
            columns: ["instance_id"];
            isOneToOne: false;
            referencedRelation: "faculty";
            referencedColumns: ["id"];
          },
        ];
      };
      contens_page: {
        Row: {
          active_at: string | null;
          content_props: Json | null;
          created_at: string;
          group: string;
          id: number;
          language: string | null;
          order: number | null;
          type_name: string;
          updated_at: string | null;
        };
        Insert: {
          active_at?: string | null;
          content_props?: Json | null;
          created_at?: string;
          group: string;
          id?: number;
          language?: string | null;
          order?: number | null;
          type_name: string;
          updated_at?: string | null;
        };
        Update: {
          active_at?: string | null;
          content_props?: Json | null;
          created_at?: string;
          group?: string;
          id?: number;
          language?: string | null;
          order?: number | null;
          type_name?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      faculty: {
        Row: {
          created_at: string;
          created_by: number | null;
          description: string | null;
          id: number;
          name: string | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          created_by?: number | null;
          description?: string | null;
          id?: number;
          name?: string | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          created_by?: number | null;
          description?: string | null;
          id?: number;
          name?: string | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "faculty_created_by_fkey";
            columns: ["created_by"];
            isOneToOne: false;
            referencedRelation: "account";
            referencedColumns: ["id"];
          },
        ];
      };
      faculty_news: {
        Row: {
          banner: string | null;
          content: string | null;
          created_at: string;
          created_by: number | null;
          description: string | null;
          id: number;
          title: string | null;
          updated_at: string | null;
        };
        Insert: {
          banner?: string | null;
          content?: string | null;
          created_at?: string;
          created_by?: number | null;
          description?: string | null;
          id?: number;
          title?: string | null;
          updated_at?: string | null;
        };
        Update: {
          banner?: string | null;
          content?: string | null;
          created_at?: string;
          created_by?: number | null;
          description?: string | null;
          id?: number;
          title?: string | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "faculty_news_created_by_fkey";
            columns: ["created_by"];
            isOneToOne: false;
            referencedRelation: "account";
            referencedColumns: ["id"];
          },
        ];
      };
      faculty_news_category: {
        Row: {
          category_id: number;
          created_at: string;
          faculty_id: number;
        };
        Insert: {
          category_id?: number;
          created_at?: string;
          faculty_id: number;
        };
        Update: {
          category_id?: number;
          created_at?: string;
          faculty_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "faculty_news_category_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "news_category";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "faculty_news_category_faculty_id_fkey";
            columns: ["faculty_id"];
            isOneToOne: false;
            referencedRelation: "faculty";
            referencedColumns: ["id"];
          },
        ];
      };
      institution: {
        Row: {
          created_at: string;
          description: string | null;
          id: number;
          name: string | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: number;
          name?: string | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: number;
          name?: string | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      major: {
        Row: {
          created_at: string;
          created_by: number | null;
          description: string | null;
          faculty_id: number | null;
          id: number;
          name: string | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          created_by?: number | null;
          description?: string | null;
          faculty_id?: number | null;
          id?: number;
          name?: string | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          created_by?: number | null;
          description?: string | null;
          faculty_id?: number | null;
          id?: number;
          name?: string | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "major_created_by_fkey";
            columns: ["created_by"];
            isOneToOne: false;
            referencedRelation: "account";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "major_faculty_id_fkey";
            columns: ["faculty_id"];
            isOneToOne: false;
            referencedRelation: "faculty";
            referencedColumns: ["id"];
          },
        ];
      };
      news_category: {
        Row: {
          created_at: string;
          id: number;
          name: string | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name?: string | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      permission: {
        Row: {
          created_at: string;
          description: string | null;
          group: string | null;
          id: number;
          updated_at: string | null;
          value: string | null;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          group?: string | null;
          id?: number;
          updated_at?: string | null;
          value?: string | null;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          group?: string | null;
          id?: number;
          updated_at?: string | null;
          value?: string | null;
        };
        Relationships: [];
      };
      staff: {
        Row: {
          account_id: number | null;
          administrative_level: number | null;
          created_at: string;
          id: number;
          institution_id: number | null;
          name: string | null;
          updated_at: string | null;
        };
        Insert: {
          account_id?: number | null;
          administrative_level?: number | null;
          created_at?: string;
          id?: number;
          institution_id?: number | null;
          name?: string | null;
          updated_at?: string | null;
        };
        Update: {
          account_id?: number | null;
          administrative_level?: number | null;
          created_at?: string;
          id?: number;
          institution_id?: number | null;
          name?: string | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "staff_account_id_fkey";
            columns: ["account_id"];
            isOneToOne: false;
            referencedRelation: "account";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "staff_institution_id_fkey";
            columns: ["institution_id"];
            isOneToOne: false;
            referencedRelation: "institution";
            referencedColumns: ["id"];
          },
        ];
      };
      university_news: {
        Row: {
          banner: string | null;
          content: string | null;
          created_at: string;
          created_by: number | null;
          description: string | null;
          id: number;
          title: string | null;
          updated_at: string | null;
        };
        Insert: {
          banner?: string | null;
          content?: string | null;
          created_at?: string;
          created_by?: number | null;
          description?: string | null;
          id?: number;
          title?: string | null;
          updated_at?: string | null;
        };
        Update: {
          banner?: string | null;
          content?: string | null;
          created_at?: string;
          created_by?: number | null;
          description?: string | null;
          id?: number;
          title?: string | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "university_news_created_by_fkey";
            columns: ["created_by"];
            isOneToOne: false;
            referencedRelation: "account";
            referencedColumns: ["id"];
          },
        ];
      };
      university_news_category: {
        Row: {
          category_id: number;
          created_at: string;
          university_id: number;
        };
        Insert: {
          category_id?: number;
          created_at?: string;
          university_id: number;
        };
        Update: {
          category_id?: number;
          created_at?: string;
          university_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "university_news_category_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "news_category";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "university_news_category_university_id_fkey";
            columns: ["university_id"];
            isOneToOne: false;
            referencedRelation: "account";
            referencedColumns: ["id"];
          },
        ];
      };
      university_parners: {
        Row: {
          created_at: string;
          id: number;
          image: string | null;
          name: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          image?: string | null;
          name?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          image?: string | null;
          name?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

// Schema: public
// Tables
export type Account = Database["public"]["Tables"]["account"]["Row"];
export type InsertAccount = Database["public"]["Tables"]["account"]["Insert"];
export type UpdateAccount = Database["public"]["Tables"]["account"]["Update"];

export type AccountPermission =
  Database["public"]["Tables"]["account_permission"]["Row"];
export type InsertAccountPermission =
  Database["public"]["Tables"]["account_permission"]["Insert"];
export type UpdateAccountPermission =
  Database["public"]["Tables"]["account_permission"]["Update"];

export type Achievement = Database["public"]["Tables"]["achievement"]["Row"];
export type InsertAchievement =
  Database["public"]["Tables"]["achievement"]["Insert"];
export type UpdateAchievement =
  Database["public"]["Tables"]["achievement"]["Update"];

export type AlumniTestimonial =
  Database["public"]["Tables"]["alumni_testimonial"]["Row"];
export type InsertAlumniTestimonial =
  Database["public"]["Tables"]["alumni_testimonial"]["Insert"];
export type UpdateAlumniTestimonial =
  Database["public"]["Tables"]["alumni_testimonial"]["Update"];

export type Application = Database["public"]["Tables"]["application"]["Row"];
export type InsertApplication =
  Database["public"]["Tables"]["application"]["Insert"];
export type UpdateApplication =
  Database["public"]["Tables"]["application"]["Update"];

export type ContensPage = Database["public"]["Tables"]["contens_page"]["Row"];
export type InsertContensPage =
  Database["public"]["Tables"]["contens_page"]["Insert"];
export type UpdateContensPage =
  Database["public"]["Tables"]["contens_page"]["Update"];

export type Faculty = Database["public"]["Tables"]["faculty"]["Row"];
export type InsertFaculty = Database["public"]["Tables"]["faculty"]["Insert"];
export type UpdateFaculty = Database["public"]["Tables"]["faculty"]["Update"];

export type FacultyNews = Database["public"]["Tables"]["faculty_news"]["Row"];
export type InsertFacultyNews =
  Database["public"]["Tables"]["faculty_news"]["Insert"];
export type UpdateFacultyNews =
  Database["public"]["Tables"]["faculty_news"]["Update"];

export type FacultyNewsCategory =
  Database["public"]["Tables"]["faculty_news_category"]["Row"];
export type InsertFacultyNewsCategory =
  Database["public"]["Tables"]["faculty_news_category"]["Insert"];
export type UpdateFacultyNewsCategory =
  Database["public"]["Tables"]["faculty_news_category"]["Update"];

export type Institution = Database["public"]["Tables"]["institution"]["Row"];
export type InsertInstitution =
  Database["public"]["Tables"]["institution"]["Insert"];
export type UpdateInstitution =
  Database["public"]["Tables"]["institution"]["Update"];

export type Major = Database["public"]["Tables"]["major"]["Row"];
export type InsertMajor = Database["public"]["Tables"]["major"]["Insert"];
export type UpdateMajor = Database["public"]["Tables"]["major"]["Update"];

export type NewsCategory = Database["public"]["Tables"]["news_category"]["Row"];
export type InsertNewsCategory =
  Database["public"]["Tables"]["news_category"]["Insert"];
export type UpdateNewsCategory =
  Database["public"]["Tables"]["news_category"]["Update"];

export type Permission = Database["public"]["Tables"]["permission"]["Row"];
export type InsertPermission =
  Database["public"]["Tables"]["permission"]["Insert"];
export type UpdatePermission =
  Database["public"]["Tables"]["permission"]["Update"];

export type Staff = Database["public"]["Tables"]["staff"]["Row"];
export type InsertStaff = Database["public"]["Tables"]["staff"]["Insert"];
export type UpdateStaff = Database["public"]["Tables"]["staff"]["Update"];

export type UniversityNews =
  Database["public"]["Tables"]["university_news"]["Row"];
export type InsertUniversityNews =
  Database["public"]["Tables"]["university_news"]["Insert"];
export type UpdateUniversityNews =
  Database["public"]["Tables"]["university_news"]["Update"];

export type UniversityNewsCategory =
  Database["public"]["Tables"]["university_news_category"]["Row"];
export type InsertUniversityNewsCategory =
  Database["public"]["Tables"]["university_news_category"]["Insert"];
export type UpdateUniversityNewsCategory =
  Database["public"]["Tables"]["university_news_category"]["Update"];

export type UniversityParners =
  Database["public"]["Tables"]["university_parners"]["Row"];
export type InsertUniversityParners =
  Database["public"]["Tables"]["university_parners"]["Insert"];
export type UpdateUniversityParners =
  Database["public"]["Tables"]["university_parners"]["Update"];
