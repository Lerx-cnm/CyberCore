class CreateWorkTable < ActiveRecord::Migration[6.0]
    def change
        create_table :works do |t|
            t.string :name
            t.string :musclegroup
            t.string :desc
            t.integer :sets
            t.integer :reps

            t.timestamps
        end
    end
end