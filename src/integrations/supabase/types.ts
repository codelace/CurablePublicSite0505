export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      assay_results: {
        Row: {
          assay_id: string | null
          confidence_interval: number | null
          created_at: string | null
          experimental_metadata: Json | null
          experimental_notes: string | null
          id: string
          incubation_time: unknown | null
          last_verified_at: string | null
          molecule_id: string | null
          ph: number | null
          raw_data: Json | null
          replicate_count: number | null
          source_id: string | null
          source_timestamp: string | null
          source_url: string | null
          standard_deviation: number | null
          statistical_analysis: Json | null
          target_id: string | null
          temperature: number | null
          unit: string
          updated_at: string | null
          validation_date: string | null
          validation_method: string | null
          validation_score: number | null
          value: number
          verification_status: string | null
        }
        Insert: {
          assay_id?: string | null
          confidence_interval?: number | null
          created_at?: string | null
          experimental_metadata?: Json | null
          experimental_notes?: string | null
          id?: string
          incubation_time?: unknown | null
          last_verified_at?: string | null
          molecule_id?: string | null
          ph?: number | null
          raw_data?: Json | null
          replicate_count?: number | null
          source_id?: string | null
          source_timestamp?: string | null
          source_url?: string | null
          standard_deviation?: number | null
          statistical_analysis?: Json | null
          target_id?: string | null
          temperature?: number | null
          unit: string
          updated_at?: string | null
          validation_date?: string | null
          validation_method?: string | null
          validation_score?: number | null
          value: number
          verification_status?: string | null
        }
        Update: {
          assay_id?: string | null
          confidence_interval?: number | null
          created_at?: string | null
          experimental_metadata?: Json | null
          experimental_notes?: string | null
          id?: string
          incubation_time?: unknown | null
          last_verified_at?: string | null
          molecule_id?: string | null
          ph?: number | null
          raw_data?: Json | null
          replicate_count?: number | null
          source_id?: string | null
          source_timestamp?: string | null
          source_url?: string | null
          standard_deviation?: number | null
          statistical_analysis?: Json | null
          target_id?: string | null
          temperature?: number | null
          unit?: string
          updated_at?: string | null
          validation_date?: string | null
          validation_method?: string | null
          validation_score?: number | null
          value?: number
          verification_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "assay_results_assay_id_fkey"
            columns: ["assay_id"]
            isOneToOne: false
            referencedRelation: "assays"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assay_results_molecule_id_fkey"
            columns: ["molecule_id"]
            isOneToOne: false
            referencedRelation: "molecules"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assay_results_source_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "data_sources"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assay_results_target_id_fkey"
            columns: ["target_id"]
            isOneToOne: false
            referencedRelation: "targets"
            referencedColumns: ["id"]
          },
        ]
      }
      assays: {
        Row: {
          conditions: string | null
          created_at: string | null
          description: string | null
          id: string
          name: string
          type: string
          updated_at: string | null
        }
        Insert: {
          conditions?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          type: string
          updated_at?: string | null
        }
        Update: {
          conditions?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      audit_logs: {
        Row: {
          action: string
          created_at: string | null
          entity_id: string
          entity_type: string
          id: string
          metadata: Json | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string | null
          entity_id: string
          entity_type: string
          id?: string
          metadata?: Json | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string | null
          entity_id?: string
          entity_type?: string
          id?: string
          metadata?: Json | null
          user_id?: string | null
        }
        Relationships: []
      }
      bindingdb_results: {
        Row: {
          affinity_type: string
          affinity_unit: string
          affinity_value: number
          conditions: string | null
          confidence_score: number | null
          created_at: string | null
          experimental_metadata: Json | null
          experimental_notes: string | null
          id: string
          last_verified_at: string | null
          method: string | null
          molecule_id: string | null
          ph: number | null
          raw_data: Json | null
          reference: string | null
          source_id: string | null
          source_timestamp: string | null
          source_url: string | null
          statistical_analysis: Json | null
          target_id: string | null
          temperature: number | null
          updated_at: string | null
          validation_date: string | null
          validation_method: string | null
          validation_score: number | null
          verification_status: string | null
        }
        Insert: {
          affinity_type: string
          affinity_unit: string
          affinity_value: number
          conditions?: string | null
          confidence_score?: number | null
          created_at?: string | null
          experimental_metadata?: Json | null
          experimental_notes?: string | null
          id?: string
          last_verified_at?: string | null
          method?: string | null
          molecule_id?: string | null
          ph?: number | null
          raw_data?: Json | null
          reference?: string | null
          source_id?: string | null
          source_timestamp?: string | null
          source_url?: string | null
          statistical_analysis?: Json | null
          target_id?: string | null
          temperature?: number | null
          updated_at?: string | null
          validation_date?: string | null
          validation_method?: string | null
          validation_score?: number | null
          verification_status?: string | null
        }
        Update: {
          affinity_type?: string
          affinity_unit?: string
          affinity_value?: number
          conditions?: string | null
          confidence_score?: number | null
          created_at?: string | null
          experimental_metadata?: Json | null
          experimental_notes?: string | null
          id?: string
          last_verified_at?: string | null
          method?: string | null
          molecule_id?: string | null
          ph?: number | null
          raw_data?: Json | null
          reference?: string | null
          source_id?: string | null
          source_timestamp?: string | null
          source_url?: string | null
          statistical_analysis?: Json | null
          target_id?: string | null
          temperature?: number | null
          updated_at?: string | null
          validation_date?: string | null
          validation_method?: string | null
          validation_score?: number | null
          verification_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bindingdb_results_molecule_id_fkey"
            columns: ["molecule_id"]
            isOneToOne: false
            referencedRelation: "molecules"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bindingdb_results_source_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "data_sources"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bindingdb_results_target_id_fkey"
            columns: ["target_id"]
            isOneToOne: false
            referencedRelation: "targets"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_memories: {
        Row: {
          content: string
          created_at: string | null
          embedding: string | null
          id: string
          metadata: Json | null
          model_type: string
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          embedding?: string | null
          id?: string
          metadata?: Json | null
          model_type: string
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          embedding?: string | null
          id?: string
          metadata?: Json | null
          model_type?: string
          user_id?: string | null
        }
        Relationships: []
      }
      conversations: {
        Row: {
          created_at: string
          id: string
          title: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          title?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          title?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      data_sources: {
        Row: {
          api_version: string | null
          created_at: string | null
          id: string
          name: string
          type: string
          updated_at: string | null
          url: string | null
        }
        Insert: {
          api_version?: string | null
          created_at?: string | null
          id?: string
          name: string
          type: string
          updated_at?: string | null
          url?: string | null
        }
        Update: {
          api_version?: string | null
          created_at?: string | null
          id?: string
          name?: string
          type?: string
          updated_at?: string | null
          url?: string | null
        }
        Relationships: []
      }
      digests: {
        Row: {
          created_at: string | null
          date: string
          id: string
          insights: Json
          new_knowledge: Json
          sent_at: string | null
          tasks_completed: Json
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          date?: string
          id?: string
          insights?: Json
          new_knowledge?: Json
          sent_at?: string | null
          tasks_completed?: Json
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          date?: string
          id?: string
          insights?: Json
          new_knowledge?: Json
          sent_at?: string | null
          tasks_completed?: Json
          user_id?: string | null
        }
        Relationships: []
      }
      docking_jobs: {
        Row: {
          created_at: string | null
          energy_range: number | null
          exhaustiveness: number | null
          grid_parameters: Json | null
          id: string
          molecule_id: string | null
          parameters: Json
          results: Json | null
          scoring_function: string | null
          seed: number | null
          status: string
          target_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          energy_range?: number | null
          exhaustiveness?: number | null
          grid_parameters?: Json | null
          id?: string
          molecule_id?: string | null
          parameters?: Json
          results?: Json | null
          scoring_function?: string | null
          seed?: number | null
          status?: string
          target_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          energy_range?: number | null
          exhaustiveness?: number | null
          grid_parameters?: Json | null
          id?: string
          molecule_id?: string | null
          parameters?: Json
          results?: Json | null
          scoring_function?: string | null
          seed?: number | null
          status?: string
          target_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "docking_jobs_molecule_id_fkey"
            columns: ["molecule_id"]
            isOneToOne: false
            referencedRelation: "molecules"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "docking_jobs_target_id_fkey"
            columns: ["target_id"]
            isOneToOne: false
            referencedRelation: "targets"
            referencedColumns: ["id"]
          },
        ]
      }
      experimental_conditions: {
        Row: {
          assay_id: string | null
          buffer_composition: Json | null
          created_at: string | null
          equipment_details: Json | null
          id: string
          incubation_time: unknown | null
          ph: number | null
          protocol_reference: string | null
          temperature: number | null
          updated_at: string | null
        }
        Insert: {
          assay_id?: string | null
          buffer_composition?: Json | null
          created_at?: string | null
          equipment_details?: Json | null
          id?: string
          incubation_time?: unknown | null
          ph?: number | null
          protocol_reference?: string | null
          temperature?: number | null
          updated_at?: string | null
        }
        Update: {
          assay_id?: string | null
          buffer_composition?: Json | null
          created_at?: string | null
          equipment_details?: Json | null
          id?: string
          incubation_time?: unknown | null
          ph?: number | null
          protocol_reference?: string | null
          temperature?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "experimental_conditions_assay_id_fkey"
            columns: ["assay_id"]
            isOneToOne: false
            referencedRelation: "assays"
            referencedColumns: ["id"]
          },
        ]
      }
      hivemind_memory: {
        Row: {
          content: string
          created_at: string | null
          embedding: string
          id: number
          role: string
        }
        Insert: {
          content: string
          created_at?: string | null
          embedding: string
          id?: number
          role: string
        }
        Update: {
          content?: string
          created_at?: string | null
          embedding?: string
          id?: number
          role?: string
        }
        Relationships: []
      }
      memory_items: {
        Row: {
          content: string | null
          created_at: string
          embedding: string | null
          id: string
          metadata: Json | null
          snippet: string
          source_url: string | null
          title: string
          type: string
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          embedding?: string | null
          id?: string
          metadata?: Json | null
          snippet: string
          source_url?: string | null
          title: string
          type: string
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          embedding?: string | null
          id?: string
          metadata?: Json | null
          snippet?: string
          source_url?: string | null
          title?: string
          type?: string
          user_id?: string | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string
          conversation_id: string
          created_at: string
          embedding: string | null
          id: string
          provider: string | null
          type: string
        }
        Insert: {
          content: string
          conversation_id: string
          created_at?: string
          embedding?: string | null
          id?: string
          provider?: string | null
          type: string
        }
        Update: {
          content?: string
          conversation_id?: string
          created_at?: string
          embedding?: string | null
          id?: string
          provider?: string | null
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      molecules: {
        Row: {
          canonical_smiles: string | null
          created_at: string | null
          experimental_conditions: Json | null
          formula: string | null
          id: string
          image_url: string | null
          inchi_key: string | null
          last_verified_at: string | null
          molecular_weight: number | null
          name: string
          similarity_score: number | null
          smiles: string
          source_id: string | null
          source_timestamp: string | null
          source_url: string | null
          updated_at: string | null
          validation_metadata: Json | null
          verification_status: string | null
        }
        Insert: {
          canonical_smiles?: string | null
          created_at?: string | null
          experimental_conditions?: Json | null
          formula?: string | null
          id?: string
          image_url?: string | null
          inchi_key?: string | null
          last_verified_at?: string | null
          molecular_weight?: number | null
          name: string
          similarity_score?: number | null
          smiles: string
          source_id?: string | null
          source_timestamp?: string | null
          source_url?: string | null
          updated_at?: string | null
          validation_metadata?: Json | null
          verification_status?: string | null
        }
        Update: {
          canonical_smiles?: string | null
          created_at?: string | null
          experimental_conditions?: Json | null
          formula?: string | null
          id?: string
          image_url?: string | null
          inchi_key?: string | null
          last_verified_at?: string | null
          molecular_weight?: number | null
          name?: string
          similarity_score?: number | null
          smiles?: string
          source_id?: string | null
          source_timestamp?: string | null
          source_url?: string | null
          updated_at?: string | null
          validation_metadata?: Json | null
          verification_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "molecules_source_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "data_sources"
            referencedColumns: ["id"]
          },
        ]
      }
      partners: {
        Row: {
          campaign: string
          created_at: string
          ctas: Json | null
          description: string
          docs: Json | null
          emoji: string | null
          id: string
          logo: string | null
          name: string
          sections: Json | null
          updated_at: string
        }
        Insert: {
          campaign: string
          created_at?: string
          ctas?: Json | null
          description: string
          docs?: Json | null
          emoji?: string | null
          id?: string
          logo?: string | null
          name: string
          sections?: Json | null
          updated_at?: string
        }
        Update: {
          campaign?: string
          created_at?: string
          ctas?: Json | null
          description?: string
          docs?: Json | null
          emoji?: string | null
          id?: string
          logo?: string | null
          name?: string
          sections?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          role: string
          updated_at: string | null
          wallet_address: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          role?: string
          updated_at?: string | null
          wallet_address?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          role?: string
          updated_at?: string | null
          wallet_address?: string | null
        }
        Relationships: []
      }
      targets: {
        Row: {
          created_at: string | null
          experimental_data: Json | null
          function: string | null
          id: string
          last_verified_at: string | null
          name: string
          organism: string | null
          pdb_id: string | null
          sequence: string | null
          similarity_score: number | null
          source_id: string | null
          source_timestamp: string | null
          source_url: string | null
          uniprot_id: string | null
          updated_at: string | null
          validation_metadata: Json | null
          verification_status: string | null
        }
        Insert: {
          created_at?: string | null
          experimental_data?: Json | null
          function?: string | null
          id?: string
          last_verified_at?: string | null
          name: string
          organism?: string | null
          pdb_id?: string | null
          sequence?: string | null
          similarity_score?: number | null
          source_id?: string | null
          source_timestamp?: string | null
          source_url?: string | null
          uniprot_id?: string | null
          updated_at?: string | null
          validation_metadata?: Json | null
          verification_status?: string | null
        }
        Update: {
          created_at?: string | null
          experimental_data?: Json | null
          function?: string | null
          id?: string
          last_verified_at?: string | null
          name?: string
          organism?: string | null
          pdb_id?: string | null
          sequence?: string | null
          similarity_score?: number | null
          source_id?: string | null
          source_timestamp?: string | null
          source_url?: string | null
          uniprot_id?: string | null
          updated_at?: string | null
          validation_metadata?: Json | null
          verification_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "targets_source_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "data_sources"
            referencedColumns: ["id"]
          },
        ]
      }
      user_api_keys: {
        Row: {
          anthropic_key: string | null
          created_at: string | null
          id: string
          openai_key: string | null
          perplexity_key: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          anthropic_key?: string | null
          created_at?: string | null
          id?: string
          openai_key?: string | null
          perplexity_key?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          anthropic_key?: string | null
          created_at?: string | null
          id?: string
          openai_key?: string | null
          perplexity_key?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          active: boolean | null
          created_at: string | null
          id: string
          name: string | null
          role: string
          updated_at: string | null
          wallet_address: string
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          id?: string
          name?: string | null
          role?: string
          updated_at?: string | null
          wallet_address: string
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          id?: string
          name?: string | null
          role?: string
          updated_at?: string | null
          wallet_address?: string
        }
        Relationships: []
      }
      validation_history: {
        Row: {
          confidence_score: number | null
          created_at: string | null
          entity_id: string
          entity_type: string
          id: string
          metadata: Json | null
          status: string
          validation_method: string | null
          validation_type: string
          validator: string | null
        }
        Insert: {
          confidence_score?: number | null
          created_at?: string | null
          entity_id: string
          entity_type: string
          id?: string
          metadata?: Json | null
          status: string
          validation_method?: string | null
          validation_type: string
          validator?: string | null
        }
        Update: {
          confidence_score?: number | null
          created_at?: string | null
          entity_id?: string
          entity_type?: string
          id?: string
          metadata?: Json | null
          status?: string
          validation_method?: string | null
          validation_type?: string
          validator?: string | null
        }
        Relationships: []
      }
      validation_records: {
        Row: {
          created_at: string | null
          entity_id: string
          entity_type: string
          id: string
          metadata: Json | null
          status: string
          updated_at: string | null
          validated_at: string | null
          validation_type: string
        }
        Insert: {
          created_at?: string | null
          entity_id: string
          entity_type: string
          id?: string
          metadata?: Json | null
          status: string
          updated_at?: string | null
          validated_at?: string | null
          validation_type: string
        }
        Update: {
          created_at?: string | null
          entity_id?: string
          entity_type?: string
          id?: string
          metadata?: Json | null
          status?: string
          updated_at?: string | null
          validated_at?: string | null
          validation_type?: string
        }
        Relationships: []
      }
      whitelisted_wallets: {
        Row: {
          active: boolean | null
          created_at: string | null
          id: string
          role: string
          updated_at: string | null
          wallet_address: string
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          id?: string
          role?: string
          updated_at?: string | null
          wallet_address: string
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          id?: string
          role?: string
          updated_at?: string | null
          wallet_address?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      binary_quantize: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      halfvec_avg: {
        Args: { "": number[] }
        Returns: unknown
      }
      halfvec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_send: {
        Args: { "": unknown }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      hnsw_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnswhandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflathandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      l2_norm: {
        Args: { "": unknown } | { "": unknown }
        Returns: number
      }
      l2_normalize: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: string
      }
      search_chat_memories: {
        Args: {
          query_embedding: string
          match_threshold: number
          match_count: number
        }
        Returns: {
          id: string
          content: string
          model_type: string
          created_at: string
          similarity: number
        }[]
      }
      search_memory: {
        Args: {
          query_embedding: string
          match_threshold: number
          match_count: number
        }
        Returns: {
          id: string
          type: string
          title: string
          snippet: string
          created_at: string
          similarity: number
        }[]
      }
      search_messages: {
        Args: {
          query_embedding: string
          match_threshold: number
          match_count: number
        }
        Returns: {
          id: string
          content: string
          type: string
          provider: string
          created_at: string
          similarity: number
        }[]
      }
      sparsevec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      sparsevec_send: {
        Args: { "": unknown }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      vector_avg: {
        Args: { "": number[] }
        Returns: string
      }
      vector_dims: {
        Args: { "": string } | { "": unknown }
        Returns: number
      }
      vector_norm: {
        Args: { "": string }
        Returns: number
      }
      vector_out: {
        Args: { "": string }
        Returns: unknown
      }
      vector_send: {
        Args: { "": string }
        Returns: string
      }
      vector_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
