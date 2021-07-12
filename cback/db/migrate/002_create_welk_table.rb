class CreateWelkTable < ActiveRecord::Migration[6.0]
    def change 
        create_table :welks do |t|
            t.integer :weight
            t.integer :bmi
            t.integer :weight_goal
            t.integer :bmi_goal

            t.timestamps
        end
    end
end